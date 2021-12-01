var radioButtons = document.querySelectorAll('.radio-button');

radioButtons.forEach(radioButton => {
    var rbGroup = radioButton.parentElement;
    radioButton.addEventListener('click', (e) => {
        if (e.target.getAttribute('value') == '1') {
            e.target.setAttribute('value', '0');
            rbGroup.setAttribute('value', null);
        } else {
            rbGroup.querySelectorAll('.radio-button').forEach(rb => {
                rb.setAttribute('value', '0');
            })
            e.target.setAttribute('value', '1');
            rbGroup.setAttribute('value', e.target.getAttribute('label'));
        }
    });
});