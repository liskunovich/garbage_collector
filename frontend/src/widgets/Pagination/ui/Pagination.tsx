import React from 'react';
import cls from './Pagination.module.scss';
import {classNames} from "shared/lib/classNames";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PAGES_OFFSET = 5;

const Pagination = ({currentPage, totalPages, onPageChange}: PaginationProps) => {

    const generatePagination = () => {
        if (totalPages <= PAGES_OFFSET) {
            return new Array(totalPages).fill(null).map((_, i) => i + 1);
        }
        if (currentPage - PAGES_OFFSET < 0) {
            return [1, 2, 3, 4, 5, null, totalPages];
        }
        if (currentPage + PAGES_OFFSET > totalPages + 1) {
            return [1, null, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
        }
        return [1, null, currentPage - 1, currentPage, currentPage + 1, null, totalPages];
    }

    return (
        <div className={cls.Pagination}>
            {generatePagination().map((page, index) => {
                if (page === null) {
                    return <div key={index} className={cls.empty}>
                        <span>...</span>
                    </div>
                }
                return <button
                    onClick={() => onPageChange(page)}
                    key={index}
                    className={classNames(cls.number, {[cls.selected]: page === currentPage})}
                >
                    <span>{page}</span>
                </button>
            })}
        </div>
    );
};

export default Pagination;