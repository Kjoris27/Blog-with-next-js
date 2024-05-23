"use client";

import PageContainer from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CATEGORIES } from "./utils/categories";
import { Category } from "@/types";
import Link from "next/link";
import PostsList from "@/components/posts-list";
import { POSTS } from "./utils/posts";


export default function Home() {
  return (
    <PageContainer>
      <div className="py-10 px-4">
      {/* List-section */}
        <div style={{ backgroundImage: "url(/img/react.jpg)"}}
        className="rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        >
          <div className="h-full w-full flex flex-col justify-center items-center">
              <div className="sm:max-w-xl max-w-xs bg-secondary/80 p-4 rounded-lg">
                <h1 className="text-center font-bold text-3xl sm:text-5xl text-black dark:text-white">
                  Become a React Developer
                </h1>
                <Input type="email" placeholder="Email"
                className="dark:bg-white mt-4" />
                <Button size="lg" className="w-full py-6 text-xl mt-4">
                  Suscribe to Our NewsLetter
                </Button>
              </div>
          </div>
        </div> 
        {/* Categories Section */}

      <div className="flex flex-col gap-4 mt-6 md:flex-row justify-center items-center">
          {CATEGORIES.map((category: Category) => (
              <Button variant="outline" key={category.id}>
                <Link href={`/categories/${category.slug}`}>
                  {category.name}
                </Link>
              </Button>

          ))}
      </div>

      {/* Liste Posts */}

      <div>
          <PostsList posts={POSTS} />
      </div>


      </div>

    </PageContainer>
    );
  }
