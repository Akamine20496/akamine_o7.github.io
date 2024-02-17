import { generateStat } from "./enchantStat.js";
import { saveToLocalStorage } from "./saveStat.js";

const statDialog = document.getElementById('dialog');
const content = document.getElementById('content');

const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');

const btnCancel = document.getElementById('btnCancel');
const btnSaveStat = document.getElementById('btnSaveStat');

const progressBar = document.getElementById('progressBar');

let interval;

// dialog config
$(statDialog).dialog({
    autoOpen: false,
    resizable: false,
    modal: true,
    show: {
        effect: "fade",
        duration: 200
    },
    hide: {
        effect: "fade",
        duration: 200
    },
    position: {
        my: "center",
        at: "center",
        of: window
    },
    beforeClose: function() {
        window.clearInterval(interval);
    }
});

// cancel closes the dialog
$(btnCancel).on('click', () => {
    $(statDialog).dialog('close');
});

// saves the stat to the local storage
$(btnSaveStat).on('click', () => {
    // empty object
    const slotStats = {};
    // add them to the object
    slotStats.attr1 = slot1.innerText;
    slotStats.attr2 = slot2.innerText;
    slotStats.attr3 = slot3.innerText;

    // save to local storage
    saveToLocalStorage(slotStats);

    // close the dialog
    $(statDialog).dialog('close');
    // trigger the event listener of btnOk
    $('#btnOk').trigger('click');
});

// make the dialog responsive and position itself at center
$(window).on('resize', () => {
    let windowWidth = $(window).width();
    let windowHeight = $(window).height();
    let dialogWidth = $(statDialog).dialog("widget").outerWidth();
    let dialogHeight = $(statDialog).dialog("widget").outerHeight();

    let leftOffset = (windowWidth - dialogWidth) / 2;
    let topOffset = (windowHeight - dialogHeight) / 2;

    leftOffset = Math.max(leftOffset, 0);
    topOffset = Math.max(topOffset, 0);

    $(statDialog).dialog("option", "position", {
        my: "center",
        at: "center",
        of: window,
        using: function(position) {
            $(this).css({
                left: position.left + "px",
                top: position.top + "px",
                transform: "none"
            });
        }
    });
});

// show the dialog
export function showDialog() {
    $(statDialog).dialog('open');
    
    if (!($(btnCancel).attr('id') == 'btnOk')) {
        load();
    }
}

// set the text
export function setText(slots) {
    slot1.innerText = slots.slot1;
    slot2.innerText = slots.slot2;
    slot3.innerText = slots.slot3;
}

function load() {
    let currValue = 0;
    interval = window.setInterval(() => {
        currValue += 1;
        $(progressBar).progressbar({value: currValue});

        // if the value reaches 100
        if (currValue === 100) {
            // clear the interval for progress bar
            window.clearInterval(interval);

            // generate stat
            generateStat();

            // hide the labels and show the slots
            $(content).find('.label').hide();
            $(content).find('.slot').show();

            // show the btnSaveStat and change the property of btnCancel
            $(btnSaveStat).css('display', 'inline-flex');
            $(btnCancel).attr('id', 'btnOk').text('OK');

            // btnOk event listener 'click'
            $('#btnOk').on('click', () => {
                // close the dialog
                $(statDialog).dialog('close');

                window.setTimeout(() => {
                    $('#btnOk').attr('id', 'btnCancel').text('Cancel');
                    $(btnSaveStat).css('display', 'none');

                    $(content).find('.label').show();
                    $(content).find('.slot').hide();
                }, 200);
            });
        }
    }, 25);
}