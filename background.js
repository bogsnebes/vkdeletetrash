const DIV_ID = "vkDeleteTrash"

const div = document.createElement('div');
div.id = DIV_ID;
div.innerHTML = `<style>
.replies {
    display: none;
}

.post_replies_header.clear_fix {
    display: none;
}

.page_block.feed_groups_recomm.js-feed_groups_recomm.feed_groups_recomm_friends {
    display: none;
}

.stories_feed_title.clear_fix {
    display: none;
}

.stories_feed_items {
    display: none;
}

.stories_feed_items_wrap {
    display: none;
}

.submit_post_box.clear_fix._submit_post_box.submit_post_box_with_best_friends.submit_post_box_with_sitposting {
    display: none;
}

.feed_friends_recomm__title {
    display: none;
}

.ui_gallery__inner {
    display: none;
}

.ui_gallery__inner_cont {
    display: none;
}
</style>
`
async function removeAdBlocksByClass() {
    console.log("Рекомендации удалились")
    const elementsMaybe = document.getElementsByClassName("PostActivityCaption");
    while(elementsMaybe.length > 0){
        elementsMaybe[0].parentNode.parentNode.removeChild(elementsMaybe[0].parentNode);
    }
}

const callback = async function(observer) {
    if (document.title == "Новости") {
        console.log("Скрытие мусора включено")
        document.body.append(div);
        bodyObserver.observe(document.body, config);
    }
    else {
        if ((document.getElementById(DIV_ID) != null) && (document.getElementsByClassName("ui_toggler_wrap hot") != null)) { 
            console.log("Скрытие мусора выключено")
            document.getElementById(DIV_ID).remove();
            bodyObserver.disconnect();
        }
    };
};

const config = {
    attributes: true,
    childList: true,
    subtree: true
};

const titleObserver = new MutationObserver(callback);
const bodyObserver = new MutationObserver(removeAdBlocksByClass)

callback()
titleObserver.observe(document.querySelector('title'), config);