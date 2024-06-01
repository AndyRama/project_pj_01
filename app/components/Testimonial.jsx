import React from "react";

import Image from "next/image";
import Link from "next/link";

const newTestimonialContent = {
  heading: {
    title: "Les témoignages",
    subTitle: "Ce qu'il pense de moi !",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga maxime molestias cumque consequuntur vero iure debitis odio repudiandae ut saepe. Velit consectetur corporis quod impedit adipisci, voluptatem rerum laborum accusantium ",
  },
  testimonials: [
    {
      img: "/images/person-3-min.jpg",
      name: "Andy Ramaroson",
      titleRole: "Developpeur web - Bordeaux",
      testimony:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga maxime molestias cumque consequuntur vero iure debitis odio repudiandae ut saepe. Velit consectetur corporis quod impedit adipisci, voluptatem rerum laborum accusantium",
    },
    {
      img: "/images/person-1-min.jpg",
      name: "Alexandra Moore",
      titleRole: "Interior Designer - Bordeaux",
      testimony:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga maxime molestias cumque consequuntur vero iure debitis odio repudiandae ut saepe. Velit consectetur corporis quod impedit adipisci, voluptatem rerum laborum accusantium",
    },
    {
      img: "/images/person-2-min.jpg",
      name: "James Mayer ",
      titleRole: "Landscape Architect - Lille",
      testimony:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga maxime molestias cumque consequuntur vero iure debitis odio repudiandae ut saepe. Velit consectetur corporis quod impedit adipisci, voluptatem rerum laborum accusantium",
    },
    {
      img: "/images/person-2-min.jpg",
      name: "Travis Scott",
      titleRole: "Landscape Architect - Lille",
      testimony:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga maxime molestias cumque consequuntur vero iure debitis odio repudiandae ut saepe. Velit consectetur corporis quod impedit adipisci, voluptatem rerum laborum accusantium",
    },
    {
      img: "/images/person-2-min.jpg",
      name: "Mayer Kevin ",
      titleRole: "Landscape Architect - Lille",
      testimony:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga maxime molestias cumque consequuntur vero iure debitis odio repudiandae ut saepe. Velit consectetur corporis quod impedit adipisci, voluptatem rerum laborum accusantium",
    },
  ],
};
const Testimonial = () => {
  return (
    <section className="mt-32 py-20 bl-light">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-start">
          <div className="lg:w-4/12 lg:pr-24 mb-10 lg:mb-0">
            {newTestimonialContent.heading.subTitle && (
              <span
                className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold 
                relative mb-7 text-orange-400"
              >
                {newTestimonialContent.heading.subTitle}
              </span>
            )}
            {newTestimonialContent.heading.title && (
              <h2 className="text-white text-heading text-2xl lg:text-4xl font-bold mb-5">
                {newTestimonialContent.heading.title}
              </h2>
            )}

            {newTestimonialContent.heading.title && (
              <p className="text-white text-body leading-relaxed mb-10">
                {newTestimonialContent.heading.description}
              </p>
            )}
          </div>
          <div className="lg:w-8/12">
            <div className="md:flex w-full space-x-0 md:space-x-6 items-end">
              <div className="md:w-6/12 mb-6 md:mb-0 ">
                {newTestimonialContent.testimonials.map((testimonial, index) => {
                  if( index == 1) return null
                  return (
                    <div
                      key={testimonial.id || index}
                      className={`bg-white p-7 rounded-lg w-full ${index == 6 ? "" : "mb-6"}`}>
                      <div className="flex space-x-5 items-center mb-4">
                        <div className="relative">
                          <Image
                            src={testimonial.img}
                            alt={testimonial.name}
                            width={579}
                            height={720}
                            className="object-cover rounded-full h-14 w-14"
                          />
                          <span className="absolute bottom-0 bg-orange-400 -right-2 w-6 h-6 rounded-full flex items-center justify-center">
                            <blockquote className="mt-4">
                              <span className="text-[30px] leading-[0] relative text-white block">
                                &ldquo;
                              </span>
                            </blockquote>
                          </span>
                        </div>
                        <div className="leading-3">
                          {testimonial.name && (
                            <strong className="block text-heading text-lg">
                              {testimonial.name}
                            </strong>
                          )}
                          {testimonial.name && (
                            <span className="text-sm ">
                              {testimonial.titleRole}
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <blockquote>
                          &ldquo;
                            {testimonial.testimony}
                          &ldquo;
                        </blockquote>
                      </div>
                    </div>
                  )}
                )}
              </div>
              <div className="md:w-6/12">
              {newTestimonialContent.testimonials.map((testimonial, index) => {
                  if( index == 1) return null
                  return (
                    <div
                      key={testimonial.id || index}
                      className={`bg-white p-7 rounded-lg w-full ${index == 1 ? "" : "mb-6"}`}>
                      <div className="flex space-x-5 items-center mb-4">
                        <div className="relative">
                          <Image
                            src={testimonial.img}
                            alt={testimonial.name}
                            width={579}
                            height={720}
                            className="object-cover rounded-full h-14 w-14"
                          />
                          <span className="absolute bottom-0 bg-orange-400 -right-2 w-6 h-6 rounded-full flex items-center justify-center">
                            <blockquote className="mt-4">
                              <span className="text-[30px] leading-[0] relative text-white block">
                                &ldquo;
                              </span>
                            </blockquote>
                          </span>
                        </div>
                        <div className="leading-3">
                          {testimonial.name && (
                            <strong className="block text-heading text-lg">
                              {testimonial.name}
                            </strong>
                          )}
                          {testimonial.name && (
                            <span className="text-sm ">
                              {testimonial.titleRole}
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <blockquote>
                          &ldquo;
                            {testimonial.testimony}
                          &ldquo;
                        </blockquote>
                      </div>
                    </div>
                  )}
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
