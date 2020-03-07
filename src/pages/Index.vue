<template>
  <Layout>
    <div class="hero container mx-auto flex flex-col sm:flex-row justify-between py-16">
      <div class="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
        <h1
          class="uppercase text-5xl text-blue-900 font-bold leading-none tracking-wide mb-2"
        >Comics Ghor</h1>
        <h2 class="uppercase text-xl text-orange-500 text-secondary tracking-widest mb-6">A CANVAS TO PAINT YOUR MIND OUT</h2>
        <p
          class="text-gray-600 leading-relaxed mb-6"
        >Welcome to Comics Ghor, a Bangladeshi website. The purpose of Comics Ghor is to create a free platform for all the Bangladeshi people, of all age, who desire to draw comics or write novels, stories or more.</p>
        <p class="text-gray-600 leading-relaxed mb-6">
          The idea of creating Comics Ghor was a dream for quite long. We want nothing but to unleash your latent talents without hesitation. Comics Ghor is created with that purpose, as the home of all creative people.
        </p>
      </div>
      <div class="mb-10 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
        <carousel :autoplay="true" :perPage=1 :autoplayTimeout=5000 >
          <slide>
            <g-image src="../../static/carousel (1).svg" class="object-cover" />
          </slide>
          <slide>
            <g-image src="../../static/carousel (2).svg" class="object-cover" />
          </slide>
          <slide>
            <g-image src="../../static/carousel (3).svg" class="object-cover" />
          </slide>
          <slide>
            <g-image src="../../static/carousel (4).svg" class="object-cover" />
          </slide>
        </carousel>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

