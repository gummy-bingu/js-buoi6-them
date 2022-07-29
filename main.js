function kiem_tra_snt(n)
            {
                var flag = true;
                if (n < 2) {
                    flag = false;
                }
                else if (n == 2) {
                    flag = true;
                }
                else if (n % 2 == 0) {
                    flag = false;
                }
                else {
                    for (var i = 3; i <= Math.sqrt(n); i += 2)
                    {
                        if (n % i == 0) {
                            flag = false;
                            break;
                        }
                    }
                }
                return flag;
            }
            function print_snt()
            {
                var number = document.getElementById("number").value;
                number = parseInt(number);
                var soNT = '';
                for (var i = 1; i <= number; i++) {
                    if (kiem_tra_snt(i)){
                        soNT += i + ' <br/>';
                    }
                }
                document.getElementById("result").innerHTML = soNT;
            }