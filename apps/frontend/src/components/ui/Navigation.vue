<template>
  <nav class="h-13 fixed z-10 w-full bg-neutral-950">
    <div class="container py-3">
      <div class="relative flex items-center justify-between">
        <BrandWordmark />
        <div class="flex items-center justify-between gap-3 text-sm">
          <NuxtLink
            to="/browse"
            class="hover:text-brand-50 rounded-md border border-neutral-700 bg-neutral-900 px-2.5 py-0.5 transition-colors hover:bg-neutral-800"
          >
            Extensions
          </NuxtLink>
          <NuxtLink
            to="/academy"
            class="hover:text-brand-50 rounded-md border border-neutral-700 bg-neutral-900 px-2.5 py-0.5 transition-colors hover:bg-neutral-800"
          >
            Academy
          </NuxtLink>
          <NuxtLink
            to="/docs"
            class="hover:text-brand-50 rounded-md border border-neutral-700 bg-neutral-900 px-2.5 py-0.5 transition-colors hover:bg-neutral-800"
          >
            Documentation
          </NuxtLink>
          <div
            class="flex items-center divide-x divide-neutral-700 overflow-hidden rounded-md border border-neutral-700 bg-neutral-800"
          >
            <NuxtLink
              to="/auth"
              class="hover:text-brand-50 bg-neutral-900 px-2.5 py-0.5 transition-colors hover:bg-neutral-800"
            >
              <span>Log in</span>
            </NuxtLink>
            <NuxtLink
              to="/auth/register"
              class="hover:text-brand-50 flex items-center gap-1 px-2.5 py-0.5 transition-colors"
            >
              <span>Sign up</span>
              <Icon name="memory:chevron-right" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-linear-to-r h-[1px] w-full from-neutral-800 via-neutral-500 to-neutral-800"
    />
  </nav>
  <div class="h-13"></div>
</template>

<style>
:root {
  --nav-offset: 3.25rem;
}
</style>
