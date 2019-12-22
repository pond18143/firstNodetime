const moment = require('moment');
const SLASH_DMYHMS = 'DD/MM/YYYY HH:mm:ss';

function assignment1(no){
var time ={
    date_time_current:moment().format(SLASH_DMYHMS),
    after_date_time_current:moment().add(no, 'days').format('h:mm:ss a'),
    before_date_time_current:moment().subtract(no, 'days').format('h:mm:ss a')};
return time;
}

module.exports = {
    assignment1 : assignment1
}