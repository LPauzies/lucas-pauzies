<script lang="ts">
    let pinLabel: string = "Pin"
    let pinPin: string = "Pin"
    let pinUnpin: string = "Unpin"

    let watchLabel: string = "Watch"
    let watchWatch: string = "Watch"
    let watchUnwatch: string = "Unwatch"
    let watchComment: string = "Will you watch this project ?"
    let watchCommentNotWatch: string = "Will you watch this project ?"
    let watchCommentWatched: string = "You watch this 😄"
    let watchCounter: number = 0

    let forkCounter: number = 0

    let starLabel: string = "Star"
    let starStar: string = "Star"
    let starStarred: string = "Starred"
    let starCounter: number = 0

    const clickPin = () => pinLabel = (pinLabel === pinPin) ? pinUnpin : pinPin

    const clickWatch = () => {
        if (watchComment === watchCommentNotWatch) {
            watchCounter++
            watchLabel = watchUnwatch
            watchComment = watchCommentWatched
        } else {
            watchCounter--
            watchLabel = watchWatch
            watchComment = watchCommentNotWatch
        }
    }

    const goToFork = () => {
        window.open("https://github.com/LPauzies/lucas-pauzies/fork")
        forkCounter++
    }

    const clickStar = () => {
        if (starLabel === starStar) {
            starLabel = starStarred
            starCounter++
        } else {
            starLabel = starStar
            starCounter--
        }
    }
</script>

<main>
    <div id="repository-container-header" class="pt-3 hide-full-screen">
        <div class="d-flex mb-3 px-3 px-md-4 px-lg-5">
            <div class="flex-auto min-width-0 width-fit mr-3">
                <h2 class="d-flex flex-wrap flex-items-center wb-break-word f3 text-normal">
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo icon mr-2">
                        <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                    </svg>
                    <span class="author flex-self-stretch">
                        <a href="https://github.com/LPauzies" class="url fn">LPauzies</a>
                    </span>
                    <span class="mx-1 flex-self-stretch color-fg-muted">/</span>
                    <strong class="mr-2 flex-self-stretch">
                        <a href="https://github.com/LPauzies/lucas-pauzies">lucas-pauzies</a>
                    </strong>
                    <span></span>
                    <span class="Label Label--secondary v-align-middle mr-1">Public</span>
                </h2>
            </div>
            <ul class="pagehead-actions flex-shrink-0 d-none d-md-inline" style="padding: 2px;">
                <li>
                    <div class="float-left" on:click={clickPin}>
                        <button title="Try to pin this" class="btn-sm btn">  
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon icon octicon-pin mr-2">
                                <path fill-rule="evenodd" d="M4.456.734a1.75 1.75 0 012.826.504l.613 1.327a3.081 3.081 0 002.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 11-1.061 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.081 3.081 0 00-1.707-2.084l-1.327-.613a1.75 1.75 0 01-.504-2.826L4.456.734zM5.92 1.866a.25.25 0 00-.404-.072L1.794 5.516a.25.25 0 00.072.404l1.328.613A4.582 4.582 0 015.73 9.63l.584 2.454a.25.25 0 00.42.12l5.47-5.47a.25.25 0 00-.12-.42L9.63 5.73a4.581 4.581 0 01-3.098-2.537L5.92 1.866z"></path>
                            </svg>
                            { pinLabel }
                        </button>
                    </div>
                </li>
                <li>
                    <div class="float-left">
                        <details class="dropdown details-reset details-overlay d-inline-block">
                            <summary title="Try to pin this" class="btn btn-sm" aria-haspopup="true">
                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon icon octicon-eye">
                                    <path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
                                </svg>
                                { watchLabel }
                                <span class="Counter">{ watchCounter }</span>
                              <div class="dropdown-caret"></div>
                            </summary>
                        
                            <ul class="dropdown-menu dropdown-menu-se" on:click={clickWatch}>
                              <li class="dropdown-item">{ watchComment }</li>
                            </ul>
                          </details>
                    </div>
                </li>
                <li>
                    <div class="float-left" on:click={goToFork}>
                        <button title="Try to fork this" class="btn-sm btn">  
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon icon octicon-repo-forked mr-2">
                                <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                            </svg>
                            Fork
                            <span class="Counter">{ forkCounter }</span>
                        </button>
                    </div>
                </li>
                <li>
                    <div class="float-left" on:click={clickStar}>
                        <button title="Try to star this" class="btn-sm btn">
                                {#if starLabel == starStar}
                                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block mr-2">
                                        <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                    </svg>
                                {:else}
                                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star d-inline-block mr-2" style="color: #E3B341">
                                        <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path>
                                    </svg>
                                {/if}
                            <span data-view-component="true" class="d-inline">
                                { starLabel }
                            </span>
                            <span class="Counter">{ starCounter }</span>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div> 
</main>

<style lang="scss">
	@import "../style/colors";

    * {
        box-sizing: border-box;
    }

    ul {
        margin-top: 0;
        margin-bottom: 0;
    }

    .url {
        color: $color-link;
    }

    .btn {
        color: $color-label;
        background-color: $color-button-background;
        border-color: $color-button-border !important;
        box-shadow: 1px 1px 1px $color-button-background-hover;
        transition: .2s cubic-bezier(0.3, 0, 0.5, 1);
        transition-property: color, background-color, border-color;
        position: relative;
        display: inline-block;
        padding: 5px 16px;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        border: 1px solid;
        border-radius: 6px;
        appearance: none;
    }

    .btn:hover {
        color: $color-label;
        background-color: $color-button-background-hover;
        border-color: $color-button-border-hover !important;
    }

    .Counter {
        background-color: $color-button-background-hover;
    }

    .Label--secondary {
        color: $color-icon !important;
        border-color: $color-icon !important;
    }

    .pagehead-actions > li {
        float: left;
        margin: 0 8px 0 0;
        font-size: 12px;
        list-style-type: none;
        color: $color-label;
    }

    .icon {
        color: $color-icon;
    }

    .dropdown-menu {
        background-color: $color-background;
        margin-top: 10px;
    }

    .dropdown-item {
        color: $color-label !important;
        cursor: pointer;
        white-space: normal !important;
    }
</style>