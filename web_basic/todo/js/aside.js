class AsideEvent {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new AsideEvent();
        }
        return this.#instance;
    }

    addEventShowMenuButton() {
        const menuButton = document.querySelector(".menu-button");
        menuButton.onclick = () => {
            const menuAside = document.querySelector(".menu-aside");
            if(menuAside.classList.contains("hidden-menu")) {
                menuAside.classList.remove("hidden-menu");
                menuButton.textContent = "◀";
            } else {
                menuAside.classList.add("hidden-menu");
                menuButton.textContent = "▶";
            }
        }
    }

    addEventMainChange() {
        const menuItems = document.querySelectorAll(".menu-items");
        const menuButton = document.querySelector(".menu-button");
        menuItems.forEach((menuItem, index) => {
            menuItem.onclick = () => {
                const mainContainers = document.querySelectorAll(".main-container");
                const menuAside = document.querySelector(".menu-aside");
                mainContainers.forEach(mainContainer => {
                    // 모든 페이지 에게 hidden을 줘서 숨겨준다.
                    mainContainer.classList.add("main-hidden");
                });
                // 선택한 인덱스만 hidden을 없애줘서 창을 띄워준다.
                mainContainers[index].classList.remove("main-hidden");
                menuAside.classList.add("hidden-menu");
                menuButton.textContent = "▶";
            }
        });
    }

}