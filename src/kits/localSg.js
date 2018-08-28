//负责操作localStorage的js文件

//标识key
export const key = 'goodsdata';
//以对象的形式添加数据
export var jsonobj = {goodsid:0,goodscount:0};
//添加数据
export function setItem(jsonobj){
    var obj = getItem(key)
    obj.push(jsonobj);
    localStorage.setItem(key,JSON.stringify(obj));

}

//获取数据
export function getItem(key){
    var str = localStorage.getItem(key);
    str = str|| '[]';
    return JSON.parse(str);
}

//删除数据
export function removeItem(key){
    localStorage.removeItem(key);
}

//将localStorage中的数据格式转化为{1:2,3:4}的格式
export function getlocalStorage(){
    var obj = {};
    var arr = getItem(key);
    for(var i=0;i<arr.length;i++){
        var item = arr[i];
        if(!obj[item.goodsid]){
            obj[item.goodsid] = item.goodscount;
        }else{
            obj[item.goodsid] += item.goodscount;
        }
    }
    return obj;
}
//通过id移除数据移除数据
export function removeSgById(id){
    var obj = getItem(key);
    for(var i=obj.length-1;i>=0;i--){
        if(obj[i].goodsid==id){
            obj.splice(i,1);
        }
    }
    localStorage.setItem(key,JSON.stringify(obj));
}