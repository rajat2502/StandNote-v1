import React from 'react';
import { Link } from 'react-router-dom';

import Footer from 'components/Footer';

function Home() {
  return (
    <div>
      <div
        style={{ height: 'calc(100vh - 80px)' }}
        className='px-8 antialiased flex justify-center items-center bg-green-700'
      >
        <div className='w-1/2 ml-10 lg:pr-4'>
          <h2 className='text-6xl text-white font-bold'>StandNote</h2>
          <h3 className='text-2xl text-gray-300'>
            Standnote is an easy to use online meeting assistant that backs you
            up with automated meeting minutes in every conversation. It will
            help you save time on board meetings, team management, and customer
            support such that you just focus on the conversation and never miss
            what’s important.
          </h3>
        </div>
        <div className='w-1/2'>
          <img src={require('assets/1.svg')} alt='' />
        </div>
      </div>
      <h1
        id='problem'
        className='p-2 underline text-5xl text-green-700 text-center font-bold bg-gray-300'
      >
        The Problem
      </h1>
      <div className='py-12 px-12 antialiased flex justify-center items-center bg-gray-300'>
        <div className='px-4 w-1/2'>
          <img
            src={require('assets/meeting.jpeg')}
            alt=''
            className='rounded-lg'
          />
        </div>
        <div className='px-4 w-1/2 ml-10 lg:pr-4'>
          <h3 className='text-3xl text-green-600'>
            Meetings are one of the most essential elements of any work culture.
            But somewhere along the lines, we often keep missing the crux of the
            discussions in these meetings. Hence, there is always one person who
            is responsible for noting the minutes of the meeting.
          </h3>
        </div>
      </div>
      <h1
        id='idea'
        className='p-2 underline text-5xl text-white text-center font-bold bg-green-700'
      >
        Our Solution
      </h1>
      <div className='py-12 px-12 antialiased flex justify-center items-center bg-green-700'>
        <div className='px-4 w-1/2 ml-10 lg:pr-4'>
          <h3 className='text-3xl text-gray-300'>
            Using our unique machine learning algorithms, we will extract
            essential Action Items, Decisions, and crucial Insights, and
            transcript and turn them into a comprehensive, collaborative meeting
            summary. Hence, we will reduce the manual efforts so that the team
            could focus on the conversations.
          </h3>
        </div>
        <div className='px-4 w-1/2'>
          <img src={require('assets/2.svg')} alt='' className='rounded-lg' />
        </div>
      </div>
      <div>
        <h1 className='p-6 underline text-center bg-gray-300 text-green-600 text-4xl font-bold'>
          Future planned Integrations
        </h1>
        <div className='bg-gray-300 p-6 pb-12 flex justify-around items-center'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png'
            alt='slack'
            className='h-16'
          />
          <img
            src='https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/brand-assets/Logos/0099ec3754bf473d2bbf317204ab6fea/trello-logo-blue.png'
            alt='Trello'
            className='h-16'
          />
          <img
            src='https://jira.atlassian.com/images/atlassian-jira-logo-large.png'
            alt='jira'
            className='h-16'
          />
          <img
            src='https://about.gitlab.com/images/press/logo/png/gitlab-logo-gray-rgb.png'
            alt='gitlab'
            className='h-20'
          />
          <img
            src='https://1000logos.net/wp-content/uploads/2018/11/GitHub-logo.png'
            alt='github'
            className='h-20'
          />
        </div>
        <p className='pb-12 font-bold text-center text-2xl bg-gray-300 text-green-600'>
          Our future prospectus includes generating the minutes of the meeting
          and pushing it directly to the respective channels, boards and
          repositories. Hence, reducing the manual efforts in generaing and
          organizing the minutes of a meeting.
        </p>
      </div>
      <div className='p-12 bg-green-700 flex justify-center items-center'>
        <div className='px-4 w-1/2 ml-10 lg:pr-4'>
          <h1 className='text-4xl font-bold'>
            A new way to have your offline/online conversation
          </h1>
          <p className='text-xl'>
            Stay connected to your conversation. Get real-time action items
            extracted. Grab insights automatically on the fly. Enjoy a live
            transcript and skyrocket the productivity.
          </p>
        </div>
        <div className='px-4 w-1/2'>
          <iframe
            title='standnote'
            width='600'
            height='400'
            className='rounded-lg'
            src='https://www.youtube.com/embed/VTQ-nlWxWv4'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
