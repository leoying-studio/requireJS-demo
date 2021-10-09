define(['easing'],function(easing) {
    const sliderInner = document.getElementById('sliderInner');
    const els = document.getElementsByClassName('slider-item');
    let start = 0;
    let begin  = 0;
    let during = 100;
    const elWidth = 400;
    const offsetEnd = Math.abs(elWidth) * (els.length - 2)
    function sild() {
        window.requestAnimationFrame(function() {
           let left = easing.Cubic.easeInOut(start, begin, 400, during);
            // 位移
            sliderInner.style.transform = 'translateX(' + -left + 'px)';
            start++;
            // 如果还没有运动到位，继续
            if (start <= during) {
                requestAnimationFrame(sild);
            } else {
                if (begin === offsetEnd) {
                    // 动画结束，这里可以插入回调...
                    begin = 0;
                    setSerialActive(0)
                } else{
                    let no = (begin / elWidth) + 1
                    begin = (no) * elWidth;
                    setSerialActive(no)
                }

                start = 0

                setTimeout(() => {
                    requestAnimationFrame(sild);
                }, 1000)
                
            }
        })
    }

    function createSerial() {
        const serial = document.getElementById('serial')
        Array.from(els).forEach(function(el, index) {
            if (index >= els.length - 1) {
                return
            }

            const div = document.createElement('div');
            div.innerText = index + 1
            div.className="dot"
            div.style='display: inline-block; width: 20px; height: 20px; line-height: 20px; margin-right: 5px; border-radius: 10px;font-size: 14px;text-align:center; background-color: rgba(0,0,0,0.5); color: #ffffff;'
            serial.appendChild(div)
        })
    }

    function setSerialActive(index) {
        const dot = document.getElementsByClassName('dot')
        for(let i = 0; i < dot.length; i++) {
            dot[i].style.backgroundColor = 'rgba(0,0,0,0.5)';
        }

        dot[index].style.backgroundColor = 'red';
    }

    createSerial();
    sild();
    setSerialActive(0)

})