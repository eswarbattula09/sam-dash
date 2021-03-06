// @flow

const {format} = require('d3-format')
const {timeFormat} = require('d3-time-format')
import moment from 'moment'

export default (affiliates: Object, timezone: number) => (interval: string) => (value: string) =>
    interval == 'hour' ? moment(value).utcOffset(timezone).format('YYYY-MM-DD HH')
  : interval == 'day' ? moment(value).utcOffset(timezone).format('YYYY-MM-DD ddd')
  : interval == 'week' ? moment(value).utcOffset(timezone).format('YYYY-MM-DD')
  : interval == 'month' ? moment(value).utcOffset(timezone).format('YYYY-MM')
  : interval == 'affiliate_id' ? affiliates[value] || value
  : value