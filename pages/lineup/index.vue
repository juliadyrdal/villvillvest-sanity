<script setup>
    const tabs = reactive([
        { name: 'Artister', href: '#', current: true },
        { name: 'Konferanse', href: '#', current: false },
    ])

    function switchTab() {
        for(let i = 0; i < tabs.length; i++) {
            tabs[i].current = !tabs[i].current
        }
        
    }
</script>

<template>
    <SectionsContainer>
        <SectionsPageHeader title="Lineup 2023" />
        <SectionsParagraphLeading>
            Hvert år kommer noen av de beste og mest talentfulle artistene til Vill Vill Vest. Artistene slippes i bolker fra juni 2023. Klikk deg inn og finn en ny favoritt fra årets lineup! 
        </SectionsParagraphLeading>
    </SectionsContainer>
    <SectionsContainer>
        <NavigationTabs @change-tab="switchTab" :tabs="tabs" />
    </SectionsContainer>
    <SectionsContainer>
        <SectionsArtistsGrid v-if="tabs[0].current === true" />
        <SectionsSessionsGrid v-if="tabs[1].current === true" />
    </SectionsContainer>
</template>