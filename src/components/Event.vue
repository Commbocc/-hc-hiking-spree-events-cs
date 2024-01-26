<script setup lang="ts">
import { events } from "../lib/events";
</script>

<template>
  <p v-if="!events.data.length">There are currently no events scheduled.</p>

  <div class="card mb-3" v-for="(event, i) in events.data" :key="i">
    <div v-if="event.fields.Published">
      <h5 class="card-header">{{ event.fields.Name }}</h5>
      <div class="card-body">
        <h5 class="card-title">
          <a target="_top" :href="`${event.fields.NewUrl}`">{{
            event.fields.LocationName[0].trim()
          }}</a>
          |
          {{
            event.fields.DateTime
              ? new Date(event.fields.DateTime).toLocaleString("en-US", {
                  hour12: true,
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })
              : null
          }}
        </h5>
        <p class="card-text"></p>
        <a
          class="btn btn-primary"
          target="_blank"
          :href="`${event.fields.Link}`"
          >Info & Registration</a
        >
      </div>
    </div>
  </div>
</template>
