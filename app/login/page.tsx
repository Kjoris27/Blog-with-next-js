"use client"

import PageContainer from '@/components/page-container';
import PageTitle from '@/components/page-title';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Github } from 'lucide-react';
import { signIn } from 'next-auth/react';
import React from 'react';


//Route statique
export default function LoginPage() {
  
  return (
  <PageContainer>
    <div className=" p-10">
    <PageTitle title="Login or Register" />

    <div className="flex-col pl-20 gap-4 max-w-sm mx-auto justify-center">
      <Button className="mb-3 " >
        <Github className="mr-10 ml-45" />
        Sign in with Github
      </Button>
      
      <Button>
        <Mail className="mr-10 ml-45" />
        Sign in with Google
      </Button>
    </div>
    </div>
  </PageContainer>
  );
}
