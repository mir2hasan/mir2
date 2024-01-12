
    const FtoShow = '.filter';
    const Fpopup = document.querySelector(FtoShow);
    const Ftrigger = document.querySelector('.filter-trigger')

    Ftrigger.addEventListener('click', () => {
        setTimeout(() => {
            if(!Fpopup.classList.contains('show')) {
                Fpopup.classList.add('show')
            }
        }, 250 )
    })

    // Auto close by click outside .filter
    document.addEventListener('click', (e) => {
        const isClosest = e.target.closest(FtoShow);
        if(!isClosest && Fpopup.classList.contains('show')) {
            Fpopup.classList.remove('show')
        }
    })

    // show cart on click
    const divtoShow = '.mini-cart';
    const divPopup = document.querySelector(divtoShow);
    const divTrigger = document.querySelector('.cart-trigger');
    
    divTrigger.addEventListener('click', () => {
        setTimeout(() => {
           if(!divPopup.classList.contains('show')) {
            divPopup.classList.add('show');
           } 
        }, 250);
    })

    // close by click outside
    document.addEventListener('click', (e) => {
        const isClosest = e.target.closest(divtoShow);
        if(!isClosest && divPopup.classList.contains('show')) {
            divPopup.classList.remove('show')
        }
    })
