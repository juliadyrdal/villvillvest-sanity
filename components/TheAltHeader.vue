<script setup>
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Lineup', href: '/lineup' },
    { name: 'Tickets', href: '#' },
  ]
  
  const mobileMenuOpen = ref(false)
  </script>

  <template>
    <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex items-center justify-between px-6 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Vill Vill Vest</span>
              <LogosBasicWhite />
            </a>
          </div>
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" class="text-lg uppercase font-semibold leading-6 text-white">{{ item.name }}</NuxtLink>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <div class="w-16 flex flex-col gap-2">
              <div class="w-full h-1.5 bg-white"></div>
              <div class="w-5/6 h-1.5 bg-white"></div>
              <div class="w-4/6 h-1.5 bg-white"></div>
            </div>
          </div>
        </nav>
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
          <div class="fixed inset-0 z-50" />
          <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Vill Vill Vest</span>
                <LogosBasicWhite />
              </a>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/25">
                <div class="space-y-2 py-6">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">{{ item.name }}</a>
                </div>
                <div class="py-6">
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">Meny</a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
  </template>