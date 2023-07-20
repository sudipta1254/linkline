var list = ['98D8AA', 'F3E99F', 'F7D060', 'FF6D60', '2193B0', '6DD5ED',
            'F6BA6F', '6DA9E4', 'ADE4DB', 'FFEBEB', '0A4D68', '088395',
            '05BFDB', '00FFCA', 'FF9E9E', '00ADB5', '99DDCC', '14FFEC',
            'E23E57', '30E3DF', '8BF5FA', '3F979B', '239F95', 'FABC74',
            'FFEA11', '81CACF', 'D61355', 'F94A29', 'FCE22A', '66BFBF',
            'FF0063', 'F9F54B', 'E96479', '7DB9B6', 'D3831C', 'C5941B',
            '251019', '7A4069', '125B50', 'F0FF42', 'F55353', 'FEA1BF',
            '006E7F', 'F8CB2E', '36AE7C', '187498', '00FFAB', 'CA4E79',
            'F8B400', 'FFD24C', 'C8B6A6', 'E3C770', 'A7FFE4', 'EB455F',
            'CE7777', 'C9BBCF', '898AA6', 'A0E4CB', 'E80F88', '850E35',
            'F1A661', '54BAB9', 'E6E5A3', 'FFB9B9'];
ilist = ['1440613905118-99b921706b5c',
'1485871981521-5b1fd3805eee', '1477959858617-67f85cf4f1df', '1414115880398-afebc3d95efc', '1484249170766-998fa6efe3c0', '1494894324626-f9727ea724ec', '1413259835094dcdeb9d3/6e609595',
'1440613905118-99b921706b5c', '1480498073050-4c6abeee90c1', '1532767153582-b1a0e5145009', '1534800891164-a1d96b5114e7',
'1499462817897-fe42dfba9131', '1510846606678-710c05a5c776',
'1512453979798-5ea266f8880c', '1516900557549-41557d405adf',
'1517935706615-2717063c2225', '1429734160945-4f85244d6a5a',
'1498206005704-36d87df55231', '1535117399959-7df1714b4202',
'1505771215590-c5fa0aec29b8', '1503581082249-caa7a3866437',
'1448906654166-444d494666b3', '1511745235279-2f7276d5ba65',
'1519602985774-5ca448b50061', '1444084316824-dc26d6657664',
'1530276371031-2511efff9d5a', '1496016943515-7d33598c11e6',
'1471306224500-6d0d218be372', '1529655683826-aba9b3e77383',
'1516893842880-5d8aada7ac05', '1510846606678-710c05a5c776',
'1522093007474-d86e9bf7ba6f'];

const sig = document.getElementById('sig');

col();
function col() {
            c1 = list[(Math.floor(Math.random()*list.length))];
            c2 = list[(Math.floor(Math.random()*list.length))];
            if (c1 == c2) col();
            sig.style.backgroundImage = `linear-gradient(120deg, #${c1}, #${c2} 70%)`;
}

i = ilist[Math.floor(Math.random()*ilist.length)];
b = window.getComputedStyle(document.querySelector('body'), '::before');
b.backgroundImage = `url(images.unsplash.com/photo-1440613905118-99b921706b5c)`;
