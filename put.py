from kinesisHandler import KinesisHandler
import json
import uuid
import time

kinesis = KinesisHandler('teste')
while(True):
    raw = open('company_funding.csv', 'r').read()
    lines = raw.split('\n')
    for line in lines:
        kinesis.put_record(line,'demo')
    time.sleep(2)

        

