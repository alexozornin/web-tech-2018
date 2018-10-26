<template>
    <div>
        <header class="sticky">
            Header
        </header>
        <div class="content">
            <div class="menu">
                <div class="menu-item">
                    lorem ipsum
                </div>
                <div class="menu-item">
                    dolor sit amet
                </div>
                <div class="menu-item">
                    consectetur adipiscing elit
                </div>
                <div class="menu-item">
                    sed do eiusmod tempor
                </div>
                <div class="menu-item">
                      incididunt ut labore
                </div>
            </div>
            <div class="main">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div class="centered">
                    Centered
                </div>
            </div>
        </div>
        <footer class="bottom">
            <div class="bottom-item" style="background-color: darkgreen">
                Box1
            </div>
            <div class="bottom-item" style="background-color: green">
                Box2
            </div>
            <div class="bottom-item" style="background-color: lightgreen">
                Box3
            </div>
        </footer>
    </div>
</template>

<style scoped>
header {
  text-align: left;
  height: 40px;
  background-color: aqua;
}
.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.menu-item {
  margin: 4px;
  background-color: yellow;
}
.main {
  padding: 4px;
  position: relative;
}
.centered {
  opacity: 0.5;
  background-color: aqua;
  position: absolute;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
  width: 100px;
  height: 100px;
}

@media screen and (min-width: 768px) {
  .content {
    display: flex;
    margin-top: 40px;
  }
  .menu {
    background-color: blue;
    padding: 2px;
  }
  .bottom {
    display: flex;
    width: 100%;
  }
  .bottom-item {
    height: 40px;
    width: 33.333%;
  }
}

@media screen and (max-width: 767px) {
  .content {
    margin-top: 40px;
  }
  .menu {
    background-color: blue;
    padding: 2px;
    display: flex;
  }
  .bottom {
    width: 100%;
  }
  .bottom-item {
    height: 40px;
    width: 100%;
  }
}
</style>

