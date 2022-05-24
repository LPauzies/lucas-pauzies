<script lang="ts">

    /* Constants */
    const jobs = [
        { name: "Me" },
        { name: "Experiences" },
        { name: "Education"},
        { name: "Certifications"},
        { name: "IT skills" },
        { name: "Languages" },
        { name: "Hobbies" }
    ]

</script>

<main>
        <nav
            class="actions-workflow-navigation flex-shrink-0 col-md-3 d-none d-md-block"
            aria-label="Workflow run summary"
        >
        <div class="height-full pb-3">
          <div
            class="js-updatable-content js-socket-channel"
            data-retain-focus=""
            data-channel="eyJjIjoiY2hlY2tfc3VpdGVzOjY2MjA0NTg5MDIiLCJ0IjoxNjUzMzk3NTA5fQ==--9fb70645349d5379ac5e274b77ae7cce6c8749a192700fcd19d667de471b577f"
            data-url="/LPauzies/lucas-pauzies/actions/runs/2371487733/sidebar_partial"
          >
            <ul class="filter-list">
              <li>
                <a class="row px-3 color-fg-default rounded d-flex flex-items-center row-selected" href="/">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="octicon octicon-home mr-2 color-fg-muted flex-shrink-0"
                  >
                    <path fill-rule="evenodd" d="M8.156 1.835a.25.25 0 00-.312 0l-5.25 4.2a.25.25 0 00-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v5.25h2.75a.25.25 0 00.25-.25V6.23a.25.25 0 00-.094-.195l-5.25-4.2zM6.906.664a1.75 1.75 0 012.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0113.25 15h-3.5a.75.75 0 01-.75-.75V9H7v5.25a.75.75 0 01-.75.75h-3.5A1.75 1.75 0 011 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2h-.001z"></path>
                  </svg>
                  Summary
                </a>
              </li>
      
              <li>
                <div class="row row-section mt-3 mb-3 color-fg-muted text-bold text-small px-3 rounded d-flex flex-items-center">
                  Jobs
                </div>
              </li>

              {#each jobs as job}
                <li data-test-selector="check_run_list_item">
                    <div class="check-run-list-item row rounded d-flex">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a
                        class="d-flex flex-1 flex-items-center color-fg-default css-truncate css-truncate-overflow no-underline px-3"
                    >
                        <span class="mr-2 flex-shrink-0">
                        <div title="This job completed successfully.">
                            <svg
                            width="16"
                            height="16"
                            class="octicon octicon-check-circle-fill color-fg-success"
                            viewBox="0 0 16 16"
                            version="1.1"
                            aria-hidden="true"
                            >
                            <path
                                fill-rule="evenodd"
                                d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.78-9.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"
                            ></path>
                            </svg>
                        </div>
                        </span>
                        <span class="css-truncate css-truncate-overflow" title="Lint">{ job.name }</span>
                    </a>
                    <div class="d-flex flex-items-center">
                        <summary data-view-component="true" class="rounded rerun-single-button btn-link ml-1 p-2">
                            <div class="tooltipped tooltipped-sw" aria-label="Re-run this job" role="tooltip">
                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-sync">
                                    <path fill-rule="evenodd" d="M8 2.5a5.487 5.487 0 00-4.131 1.869l1.204 1.204A.25.25 0 014.896 6H1.25A.25.25 0 011 5.75V2.104a.25.25 0 01.427-.177l1.38 1.38A7.001 7.001 0 0114.95 7.16a.75.75 0 11-1.49.178A5.501 5.501 0 008 2.5zM1.705 8.005a.75.75 0 01.834.656 5.501 5.501 0 009.592 2.97l-1.204-1.204a.25.25 0 01.177-.427h3.646a.25.25 0 01.25.25v3.646a.25.25 0 01-.427.177l-1.38-1.38A7.001 7.001 0 011.05 8.84a.75.75 0 01.656-.834z">
                                    </path>
                                </svg>
                            </div>
                        </summary>
                    </div>
                </li>
              {/each}

            </ul>
          </div>
        </div>
      </nav>
</main>

<style lang="scss">
	@import "../../style/colors";

    * {
        box-sizing: border-box;
    }

    ul, ol {
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    .filter-list {
        list-style-type: none;
    }

    .actions-workflow-navigation {
        width: 340px;
    }

    .actions-workflow-navigation .row-selected {
        font-weight: 600;
        background-color: $color-button-background;
    }

    .actions-workflow-navigation .row {
        height: 40px;
        line-height: 20px;
        text-decoration: none;
        transition: background-color .15s ease;
    }

    .check-run-list-item {
        cursor: pointer;
    }

    .check-run-list-item.row:hover {
        background-color: $color-button-background;
    }

    .flex-items-center {
        align-items: center !important;
    }

    .color-fg-default {
        color: $color-label !important;
    }

    .d-md-block {
        display: block !important;
    }

    .height-full {
        height: 100% !important;
    }
</style>