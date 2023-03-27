from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import DjangoJobStore, register_events
from django.utils import timezone
from django_apscheduler.models import DjangoJobExecution
import sys


def activate_news_scrapers():
    from ..scrapers.baigenews import scrap_baigenews
    from ..db.db_seeder import write_in_post
    data = scrap_baigenews()
    write_in_post(data)


def start():
    scheduler = BackgroundScheduler()
    scheduler.add_jobstore(DjangoJobStore(), "default")
    # run this job every 48 hours
    scheduler.add_job(activate_news_scrapers, 'interval', hours=48, name='scrap_news', jobstore='default',
                      max_instances=1, replace_existing=True, misfire_grace_time=30)
    scheduler.start()
    print("Scheduler started...", file=sys.stdout)
