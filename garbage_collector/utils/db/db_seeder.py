from main.models import GarbageDelivery, Collector


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

