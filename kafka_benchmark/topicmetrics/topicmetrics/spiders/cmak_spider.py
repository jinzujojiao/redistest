import scrapy
import json
from urllib.parse import urlparse
from urllib.parse import parse_qs
from urllib.parse import urlencode
from urllib.parse import urlunparse
import time
from datetime import timezone
import ast
import logging
from topicmetrics.items import TopicmetricsItem

class CmakSpider(scrapy.Spider):
    name="CMAK"
    start = time.time()
    duration = 0

    def start_requests(self):
        cluster = getattr(self, 'cluster', 'lijjin-test')
        topic = getattr(self, 'topic', 'user2role')
        host = getattr(self, 'host', 'localhost')
        port = getattr(self, 'port', '9000')
        # unit is second
        self.duration = float(getattr(self, 'duration', '360'))

        url = 'http://' + host + ':' + port + '/clusters/' + cluster + '/topics/' + topic

        logging.info('url: %s', url)

        requests = []
        request = scrapy.Request(
                url,
                callback=self.parse_topic)
        requests.append(request)
        return requests

    def parse_topic(self, response):
        # get message per second within 1 min
        msgpers = response.xpath('//table[@class="table"]/tbody/tr/td/span[@class="badge"]/text()')[1].get()
        logging.info('Get metrics %s', msgpers)
        item = TopicmetricsItem()
        item['msgpers'] = msgpers
        yield item

        now = time.time()
        if now - self.start < self.duration:
            yield response.follow(response.url, callback=self.parse_topic, dont_filter=True)
