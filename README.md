###Run Me Please

#1 Modify *.pac
#vim lite.pac
#2 Commit changes
#git commit -a -m "update lite.pac"
#3 Enable proxy and git push
#proxy;git push

#One Line:
source ~/.zshrc;proxy;vim lite.pac;proxy;git commit -a -m "update lite.pac";git push;watch curl -s https://pac.ywboy.top/lite.pac
