<script setup lang="ts">

    type TwTextPaletteDefaultProps = {
        text?: string | undefined
    }

    const props = withDefaults(
        defineProps<TwTextPaletteDefaultProps>(), {
            text: ''
        }
    )

</script>


<template>

    <div>
        <template v-if="text">
            {{ text }}
        </template>
        <template v-else>
            <slot>TwTextPaletteDefault</slot>
        </template>
    </div>

</template>
