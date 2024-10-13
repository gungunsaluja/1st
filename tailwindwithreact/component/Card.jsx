import React from 'react'

function Card({channel})
{
    console.log("props",channel);
    return (
        <div>
            <h1 className = 'bg-green-400 text-black p-4 rounded-xl'>{channel}</h1>
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto mb-4" src="https://images.pexels.com/photos/8586486/pexels-photo-8586486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512" />
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div cl>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
        </div>
    )
}
export default Card