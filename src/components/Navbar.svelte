<script lang="ts">
    let settingsLabel: string = "Settings"
    let settingsLabelSettings: string = "Settings"
    let settingsLabelClicked: string = "You do not own this repository 😜"

    const clickSettings = async () => {
        settingsLabel = settingsLabelClicked
        await new Promise(r => setTimeout(r, 3000))
        settingsLabel = settingsLabelSettings
    }
</script>

<main>
    <nav
    data-pjax="#js-repo-pjax-container"
    aria-label="Repository"
    data-view-component="true"
    class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav px-3 px-md-4 px-lg-5"
  >
    <ul data-view-component="true" class="UnderlineNav-body list-style-none">
      <li data-view-component="true" class="d-inline-flex">
        <a id="code-tab" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item" href="https://github.com/LPauzies/lucas-pauzies" target="_blank">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline"
          >
            <path
              fill-rule="evenodd"
              d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
            ></path>
          </svg>
          <span>Code</span>
        </a>
      </li>
      <li data-view-component="true" class="d-inline-flex">
        <a id="issues-tab" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item" href="https://github.com/LPauzies/lucas-pauzies/issues" target="_blank">
            <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline"
            >
                <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                <path
                fill-rule="evenodd"
                d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                ></path>
            </svg>
            <span>Issues</span>
        </a>
      </li>
      <li data-view-component="true" class="d-inline-flex">
        <a id="pull-requests-tab" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item" href="https://github.com/LPauzies/lucas-pauzies/pulls" target="_blank">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline"
          >
            <path
              fill-rule="evenodd"
              d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
            ></path>
          </svg>
          <span>Pull requests</span>
        </a>
      </li>
      <li data-view-component="true" class="d-inline-flex">
        <a id="actions-tab" class="UnderlineNav-item selected no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"
            ></path>
          </svg>
          <span>Actions</span>
        </a>
      </li>
      <li data-view-component="true" class="d-inline-flex">
        <a id="projects-tab" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item" href="https://github.com/LPauzies/lucas-pauzies/projects?type=beta" target="_blank">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline"
          >
            <path
              fill-rule="evenodd"
              d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v3.585a.746.746 0 010 .83v8.085A1.75 1.75 0 0114.25 16H6.309a.748.748 0 01-1.118 0H1.75A1.75 1.75 0 010 14.25V6.165a.746.746 0 010-.83V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"
            ></path>
          </svg>
          <span>Projects</span>
        </a>
      </li>
      <li data-view-component="true" class="d-inline-flex">
        <a id="wiki-tab" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item" href="https://github.com/LPauzies/lucas-pauzies" target="_blank">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline"
          >
            <path
              fill-rule="evenodd"
              d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
            ></path>
          </svg>
          <span>Wiki</span>
        </a>
      </li>
      <li data-view-component="true" class="d-inline-flex">
        <a id="security-tab" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item" href="https://github.com/LPauzies/lucas-pauzies/security" target="_blank">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline"
          >
            <path
              fill-rule="evenodd"
              d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"
            ></path>
          </svg>
          <span>Security</span>
        </a>
      </li>
      <li data-view-component="true" class="d-inline-flex">
        <a id="insights-tab" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item" href="https://github.com/LPauzies/lucas-pauzies/pulse" target="_blank">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
            ></path>
          </svg>
          <span>Insights</span>
        </a>
      </li>
      <li data-view-component="true" class="d-inline-flex" on:click={clickSettings}>
        <a id="settings-tab" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-gear UnderlineNav-octicon d-none d-sm-inline"
          >
            <path
              fill-rule="evenodd"
              d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          <span>{ settingsLabel }</span>
        </a>
      </li>
    </ul>
  </nav>  
</main>

<style lang="scss">
    @import "../style/colors";

    * {
        box-sizing: border-box;
    }

    a, button {
        transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
        transition-property: color,background-color,box-shadow,border-color;
        text-decoration: none;
    }

    .UnderlineNav {
        display: flex;
        min-height: 48px;
        overflow-x: auto;
        overflow-y: hidden;
        box-shadow: inset 0 -1px 0 $color-button-background-hover;
        -webkit-overflow-scrolling: auto;
        justify-content: space-between;
    }

    .UnderlineNav-body {
        display: flex;
        align-items: center;
        gap: 8px;
        list-style: none;
    }

    .UnderlineNav-item {
        position: relative;
        display: flex;
        padding: 0 8px;
        font-size: 14px;
        line-height: 30px;
        color: $color-label;
        text-align: center;
        white-space: nowrap;
        cursor: pointer;
        background-color: transparent;
        border: 0;
        border-radius: 6px;
        align-items: center;
    }

    .UnderlineNav-item.selected {
        font-weight: 600;
        color: $color-label;
        border-bottom-color: $color-selected;
        outline-offset: -8px;
    }

    .UnderlineNav-item.selected::after {
        position: absolute;
        right: 50%;
        bottom: calc(50% - 25px);
        width: 100%;
        height: 2px;
        content: "";
        background: $color-selected;
        border-radius: 6px;
        transform: translate(50%, -50%);
    }

    .UnderlineNav-item:hover {
        color: $color-label;
        text-decoration: none;
        background: $color-button-background-hover;
        transition: background .12s ease-out;
    }

    .UnderlineNav-item::before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        min-height: 48px;
        content: "";
        transform: translateX(-50%) translateY(-50%);
    }

    .UnderlineNav-item:hover, .UnderlineNav-item:focus, .UnderlineNav-item:focus-visible {
        color: $color-label;
        border-bottom-color: $color-button-background-hover;
        outline-offset: -2px;
        transition: border-bottom-color .12s ease-out;
    }

    .list-style-none {
        list-style: none !important;
    }

    .no-wrap {
        white-space: nowrap !important;
    }
    

</style>