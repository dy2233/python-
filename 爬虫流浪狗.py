from urllib.request import urlretrieve
import requests
from bs4 import BeautifulSoup
url = "https://tieba.baidu.com/p/6045474546"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36',
    'Cookie': 'XFI=d4425d40-bc09-11ed-bdb9-9f20e5a50999; XFCS=6EFC20F6EE25C40E84D00D527131DAA12A1BBE0CCD41018083ABB0E702685335; XFT=48MEU7a9S1G66/xpSaa0z/QhAZcX7FcsBZ8viWk2SmY=; BIDUPSID=DF24C128E4FC8A429723D8FAFD0DE5D2; PSTM=1677658193; BAIDUID=DF24C128E4FC8A4219CCCD7702731A42:FG=1; BAIDUID_BFESS=DF24C128E4FC8A4219CCCD7702731A42:FG=1; ZFY=UdhsqGNsUtbpf31Lbrj:AaH:BA9UBcksuK1SkBeYJBDlI:C; H_PS_PSSID=36560_38271_38131_37910_37862_38265_38173_38289_38240_38035_37929_26350_37881; BA_HECTOR=a00ga08100a4240ga5ala4fo1i0asa01n; PSINO=7; delPer=0; wise_device=0; BAIDU_WISE_UID=wapp_1678098590962_620; USER_JUMP=-1; arialoadData=false; RT="z=1&dm=baidu.com&si=44a3e101-c6f6-48d2-a8bb-774ee929c53c&ss=lewokmog&sl=2&tt=436&bcn=https%3A%2F%2Ffclog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf&ld=4vq&ul=1g70h&hd=1g7e8"; tb_as_data=d49702562851dc5e15c0060868b203b83741be2315a3a7bbab780620eaea5396ff6dab3d5a40f1e430d07915432db1926b81b574b078e75d76bbc46a84abdc92dbf433608021ad21860606b4b75db96fafce08996f97c9ded7898ef8d684919899306ad51a135ff1790440985595b5ef'
}
r = requests.get(url,headers = headers)
info = r.text 
print(info)
soup = BeautifulSoup(info,'html.parser')
all_img = soup.find_all('img', class_ = "BDE_Image")
a = 0
print(all_img)
for img in all_img:
    src = img['src']
    url = f"C:\\Users\\fl\Desktop\dog\\{a}.jpg"
    a += 1
    urlretrieve(src,url)
    print("下载完%d张了..."%(a))