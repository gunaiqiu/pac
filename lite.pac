function FindProxyForURL(url, host) {
if (
 shExpMatch(url,"*google.com*") ||
 shExpMatch(url,"*youtube.com*") ||
 shExpMatch(url,"*googlevideo.com*") ||
 shExpMatch(url,"*ytimg.com*") ||
 shExpMatch(url,"*ggpht.com*") ||
 shExpMatch(url,"*github*") ||
 shExpMatch(url,"*cloudflare*") ||
 shExpMatch(url,"*stripe.com*") ||
 shExpMatch(url,"*geolocation.onetrust.com*") ||
 shExpMatch(url,"*jsdelivr*") ||
 shExpMatch(url,"*v2ex*") ||
 shExpMatch(url,"*x.com*") ||
 shExpMatch(url,"*twitter*") ||
 shExpMatch(url,"*facebook*") ||
 shExpMatch(url,"*wikipedia*") ||
 shExpMatch(url,"*wikimedia*") ||
 shExpMatch(url,"*iterm2.com*") ||
 shExpMatch(url,"*doubleclick*")
 )
 {
 return "SOCKS localhost:7897";
 }
 
 return "DIRECT";
}
