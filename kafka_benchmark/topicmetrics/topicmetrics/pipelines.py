# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


class TopicmetricsPipeline(object):
    def __init__(self):
        self.file = open('items.txt', 'a')

    def process_item(self, item, spider):
        self.file.write(item['msgpers'] + '\n')
        return item
