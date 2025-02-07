function FindProxyForURL(url, host) {
if (
 shExpMatch(url,"*google*") ||
 shExpMatch(url,"*youtube*") ||
 shExpMatch(url,"*github*") ||
 shExpMatch(url,"*cloudflare*") ||
 shExpMatch(url,"*stripe.com*") ||
 shExpMatch(url,"*geolocation.onetrust.com*") ||
 shExpMatch(url,"*doubleclick*")
 )
 {
 return "SOCKS localhost:7897";
 }
 
 return "DIRECT";
}
