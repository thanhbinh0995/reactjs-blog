import moment from 'moment/moment';
import { SLASH_DATE_FORMAT } from '../constants';

export const convertDefaultDateTime = dateString =>
    dateString ? moment(dateString).format(SLASH_DATE_FORMAT) : '';
