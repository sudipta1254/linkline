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
const na = document.getElementById('sig');
col();
function col() {
            for(i = 0; i < 2; i++) {
                c1 = list[(Math.floor(Math.random()*list.length))];
                c2 = list[(Math.floor(Math.random()*list.length))];
            }
            if (c1 == c2) col();
}
na.style.backgroundImage = 'linear-gradient(120deg, #'+c1+', #'+c2+' 70%)';
// alert('linear-gradient(120deg, #'+c1+', #'+c2+' 70%)')
