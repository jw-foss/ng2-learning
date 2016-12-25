import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'createTime' })
export class CreateTimePipe implements PipeTransform {
    transform(time): string {
        let now = Date.now();
        let created = new Date(time).getTime();
        let minus = (now - created) / 1000;
        let year = Math.floor(minus / (60 * 60 * 24 * 30 * 12));
        let month = Math.floor(minus / (60 * 60 * 24 * 30));
        let day = Math.floor(minus / (60 * 60 * 24));
        let hour = Math.floor(minus / (60 * 60));
        let min = Math.floor(minus / 60);
        return year ? year + '年前' : month ? month + '月前' : day ? day + '天前' : hour ? hour + '小时前' : min + '分钟前';
    }
}