import { loadStatList } from "./statList.js";
import { showDialog } from "./dialog.js";
import { loadSavedStats } from "./savedStats.js";

// ready function
$(document).ready(() => {
    // Credits
    console.log('%cAvatar Stat RNG (Toram Online) by AKAMiNE,\nthe datas are from Toram Online.',
                'color: red; font-size: 20px; font-weight: bold;');

    const btnStatList = document.getElementById('btnStatList');
    const btnEnchant = document.getElementById('btnEnchant');
    const btnSavedStats = document.getElementById('btnSavedStats');

    $(btnStatList).on('click', () => {
        loadStatList();
    });

    $(btnEnchant).on('click', () => {
        showDialog();
    });

    $(btnSavedStats).on('click', () => {
        loadSavedStats();
    });
});