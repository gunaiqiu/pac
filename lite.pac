function FindProxyForURL(url, host) {
if (
 shExpMatch(url,"*google.com*") ||
 shExpMatch(url,"*oracle.com*") ||
 shExpMatch(url,"*manus.im*") ||
 shExpMatch(url,"*youtube.com*") ||
 shExpMatch(url,"*googlevideo.com*") ||
 shExpMatch(url,"*ytimg.com*") ||
 shExpMatch(url,"*ggpht.com*") ||
 shExpMatch(url,"*github*") ||
 shExpMatch(url,"*workos.com*") ||
 shExpMatch(url,"*cursor.com*") ||
 shExpMatch(url,"*authenticator.cursor.sh*") ||
 shExpMatch(url,"*li.nux.ro*") ||
 shExpMatch(url,"*cloudflare.com*") ||
 shExpMatch(url,"*stripe.com*") ||
 shExpMatch(url,"*geolocation.onetrust.com*") ||
 shExpMatch(url,"*jsdelivr*") ||
 shExpMatch(url,"*v2ex*") ||
 shExpMatch(url,"*x.com*") ||
 shExpMatch(url,"*twitter*") ||
 shExpMatch(url,"*facebook*") ||
 shExpMatch(url,"*openai.com*") ||
 shExpMatch(url,"*comma.ai*") ||
 shExpMatch(url,"*lmsys.org*") ||
 shExpMatch(url,"*jenkins.comma.life*") ||
 shExpMatch(url,"*chatgpt.com*") ||
 shExpMatch(url,"*discord.com*") ||
 shExpMatch(url,"*ingest.sentry.io*") ||
 shExpMatch(url,"*docker.com*") ||
 shExpMatch(url,"*wikipedia*") ||
 shExpMatch(url,"*wikimedia*") ||
 shExpMatch(url,"*iterm2.com*") ||
 shExpMatch(url,"*doubleclick*")
 )
 {
 return "SOCKS rpi.ywboy.top:7897";
 }
 
 return "DIRECT";
}
