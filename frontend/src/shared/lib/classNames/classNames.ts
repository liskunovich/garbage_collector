
type Opts = Record<string, boolean | string>;

export function classNames (cls: string, opts: Opts = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(opts).filter(([_, value]) => value).map(([key]) => key)
    ].join(' ');
}
