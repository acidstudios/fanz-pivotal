module.exports = (Franz) => {
    function getMessages() {
        const elements = document.querySelectorAll("[data-aid='NotificationsBell__unreadCounter']");
        let count = 0;
        if(elements[0]) {
            count = parseInt(elements[0].innerHTML);
        }

        Franz.setBadge(count);
    }

    Franz.loop(getMessages);
}