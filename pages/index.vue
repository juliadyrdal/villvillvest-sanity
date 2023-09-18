<script setup>
    definePageMeta({
  layout: "landing",
});
</script>

<template>
    <div>
        <TheHero display-message="09.–11. November" primaryCTA="Bestill billetter" secondaryCTA="Se lineup" />
        <SectionsWelcome />
        <SectionsContainer>
            <TypeHeadingSection title="Lineup" />
            <SectionsArtistsColumns />
        </SectionsContainer>
        <SectionsContainer>
            <TypeHeadingSection title="Sessions" />
            <SectionsSessionsColumns />
        </SectionsContainer>
        <SectionsPostsColumns />
    </div>
</template>
