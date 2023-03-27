from main.models import GarbageDelivery, Collector, Post


def write_in_post(data):
    for d in data:
        post, created = Post.objects.get_or_create(
            source=d.get('source'),
            created=d.get('created'),
            title=d.get('title'),
            text=d.get('text'),
            url=d.get('url')
        )


def write_in_garbage_delivery(collector, data):
    delivery = GarbageDelivery(
        collector=collector,
        date=data['date'].value,
        glass=data['glass'].value,
        plastic=data['plastic'].value,
        carton=data['carton'].value
    )
    delivery.save()
    patch_collector(collector, data)


def patch_collector(collector, data):
    collector.glass += data['glass'].value
    collector.plastic += data['plastic'].value
    collector.carton += data['carton'].value
    collector.save()
