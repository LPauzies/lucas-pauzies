<script lang="ts">

    /* Constants */
    const firstExperience = "09/01/2018";
    const name = "Lucas Pauzies"

    /* Some functions */
    let experienceYear = Math.abs(new Date(new Date().getTime() - new Date(firstExperience).getTime()).getUTCFullYear() - 1970);

</script>

<main>
    <div class="px-4">
        <div class="js-updatable-content js-socket-channel d-flex flex-items-start flex-md-items-center pb-3 pb-md-4 pl-0 pl-md-2 mt-n2 mb-1 ml-1">
            <div class="d-flex flex-auto mr-3">
                <div class="flex-shrink-0 mr-3 hide-sm hide-md">
                    <div title="This workflow run completed successfully.">
                        <svg width="24" height="24" style="margin-top: 3px" class="octicon octicon-check-circle-fill color-fg-success" viewBox="0 0 24 24" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.28-2.72a.75.75 0 00-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l6.5-6.5z"></path></svg>
                    </div>
                </div>
                <div class="flex-column">
                    <h3 class="ml-n1 flex-auto lh-condensed lh-md-default">
                        <span class="hide-sm hide-md">{ name }</span>
                        <span class="hide-lg hide-xl">{ name }</span>
                        <div class="d-flex flex-items-center mt-1 mt-md-0 d-md-block color-fg-muted text-normal d-block d-lg-inline">
                            <div class="d-flex mr-2 hide-lg hide-xl text-small">
                                <div title="This workflow run completed successfully.">
                                    <svg width="16" height="16" class="octicon octicon-check-circle-fill color-fg-success" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.78-9.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"></path></svg>
                                </div>
                            </div>
                            <span class="hide-sm hide-md">Technical Lead ({ experienceYear } years of experience)</span>
                            <span class="f4 hide-lg hide-xl">Technical Lead ({ experienceYear } years of experience)</span>
                        </div>
                    </h3>
                </div>
                </div>
        </div>
    </div>
</main>