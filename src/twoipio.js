class twoipio{
    constructor(){
        this.api = "https://2ip.io"
        this.headers={"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","x-requested-with": "xmlhttprequest"}
        this.wallet=null
    }
    async req_2(url, data,method="GET"){
    if (data) {
            method="POST"
            data=data;
        }
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: method,
                headers: {"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","host":"vpnchecker.2ip.io","Origin":"https://2ip.io","Referer":"https://2ip.io/"},
                body: data
            }).then(res => res.json()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    async req(url, data,method="GET"){
    if (data) {
            method="POST"
            data=data;
        }
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: method,
                headers: this.headers,
                body: data
            }).then(res => res.json()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    async ip_info(){
        return (await this.req_2(`https://vpnchecker.2ip.io/proxy/`));
    }
    async get_sll(url){
        return (await this.req(`${this.api}/ssl-info/`,`url=${url}&turingCode=`));
    }
    async port_check(id){
        return(await this.req(`${this.api}/?area=portScaner&ajax=1&serverId=${id}`));
    }
    async spam_check(ip){
        return (await this.req(`${this.api}/spam/?ip=${ip}`));
    }
    async spy_check(){
        return (await this.req(`${this.api}/?area=spyViewer`));
    }
}
module.exports = {twoipio};