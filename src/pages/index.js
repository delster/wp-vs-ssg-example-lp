import React from "react"
import { Container, Row, Col } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Blurb from "../components/blurb"
import Hero from "../components/hero"
import ImageContent from "../components/imagecontent"
import MediaList from "../components/medialist"
import PriceChart from "../components/pricechart"
import QuestionsCTA from "../components/questionscta"
import RegisterBox from "../components/registerbox"
import RegisterButton from "../components/registerbutton"
import Slider from "../components/slider"
import ThreeColumn from "../components/threecolumn"

import ImageContent1Img from "../images/ic-1.jpg"
import ImageContent2Img from "../images/ic-2.jpg"
import ImageContent3Img from "../images/ic-3.jpg"
import ImageContent4Img from "../images/ic-4.png"
import MedialList1Img from "../images/ml-1.jpg"
import MedialList2Img from "../images/ml-2.jpg"
import MedialList3Img from "../images/ml-3.jpg"
import PlaceholderImg from "../images/placeholder.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`wordpress`, `versus`, `gatsby`]} />
    <Hero>
      <h1>Create Online Programs for Your Health Practice</h1>
      <p>Free up Your Time ∙ Impact More Clients ∙ Provide Accessible Care</p>
      <RegisterButton />
    </Hero>
    <ThreeColumn>
      <Blurb
        image={PlaceholderImg}
        heading="Build Your Practice"
        content="If you're just getting started or in the first few years and need to focus on establishing your business, you need to learn more about the Business Building Mentorship program."
      />
      <Blurb
        image={PlaceholderImg}
        heading="Launch Your Program"
        content="You're maxed out with clients and ready to leverage your practice to offer an online program. Learn more about the workshop and how to register."
      />
      <Blurb
        image={PlaceholderImg}
        heading="Listen & Learn"
        content="Need a little inspiration? Listen to The Leveraged Practice Podcast with quick tips, insightful interviews and actionable strategies specific to health professional wanting to offer online programs."
      />
    </ThreeColumn>
    <ImageContent flipped image={ImageContent1Img}>
      <h2>
        Are You Struggling to Create an Online Program for Your Health Practice?
      </h2>
      <p>
        Do you struggle with efficient client education? <br />
        Have you hit a ceiling in taking clients and marketing your practice?{" "}
        <br />
        Are you unable to support as many clients as you would like to? <br />
        Is the right client for your program unclear? <br />
        Does technology stop you in your tracks? <br />
        Not sure where to even start?
      </p>
    </ImageContent>
    <ImageContent image={ImageContent2Img}>
      <h2>It’s time to leverage your expertise in a program</h2>
      <p>
        Perhaps you’ve thought about creating a group program, so you can help
        more people, support more clients or grow the income in your practice,
        but you have no idea where to start!
      </p>
      <p>
        From figuring out how to develop your program, what platform to use and
        how to get people excited enough to enrol, creating an online health
        program can <strong>feel hard</strong>.
      </p>
      <p>
        <strong>But you can do hard things, can’t you?</strong>
      </p>
      <RegisterButton />
    </ImageContent>
    <Slider />
    <ImageContent flipped image={ImageContent3Img}>
      <h2>You Need A Plan to Follow</h2>
      <p>
        You’ve never done this before... or perhaps you tried to get started but
        content development, technology or something else got you stuck! Without
        having a step-by-step system to follow, creating a program can take
        years, or just not happen.
      </p>
      <p>
        You have incredible expertise to offer that is already changing lives.
        Once you create your online program, you can serve more people and have
        more time on your hands.
      </p>
      <p>
        Before, during and after the workshop, you’ll use a tried and tested
        plan used over and over again to plan, develop, implement and evaluate
        health programs. No more overwhelm, guesswork, or trying to figure out
        what to do next.
      </p>
    </ImageContent>
    <Row>
      <Col>
        <RegisterButton />
      </Col>
    </Row>
    <ImageContent
      flipped
      image={ImageContent4Img}
      style={{ marginBottom: `0` }}
    >
      <h2>Who’s Facilitating this Workshop?</h2>
      <p>Stephanie has been teaching her whole life.</p>
      <p>
        After becoming a dietitian and starting her own Practice, she quickly
        saw the need to leverage her expertise with online programs.
      </p>
      <p>
        Since 2012 Stephanie has taught 4 online programs, 3 online workshops,
        50+ online webinars, launched And run 2 successful online membership
        programs and Helped other health professionals develop, create and
        launch their online programs. She has successfully supported Thousands
        of clients online with her professional and Health-focused programs.
      </p>
      <p>
        In this workshop, Stephanie will lead you through her step-By-step
        framework so you can take your own expertise And bring it online so more
        people can improve their health. You are in the hands of someone who
        truly knows the health Profession and will help you do this right.
      </p>
      <RegisterButton />
    </ImageContent>
    <ThreeColumn>
      <Blurb
        image={PlaceholderImg}
        heading="Get Feedback"
        content="Live workshops to facilitate action taking, group discussions and real time feedback so you know you’re doing it right."
      />
      <Blurb
        image={PlaceholderImg}
        heading="Health Focused"
        content="Help with regulations, privacy and legal considerations for teaching health online. Learn best practices for online health education programs."
      />
      <Blurb
        image={PlaceholderImg}
        heading="End Overwhelm"
        content="Stop sitting on your idea and get it done with a step-by-step framework to follow. Plus done-for-you materials ready to go."
      />
    </ThreeColumn>
    <section className="section whatsincluded">
      <Container>
        <h2>What's Included in the Workshop:</h2>
        <MediaList>
          <Blurb
            horizontal
            image={MedialList1Img}
            heading="Planning Workbook & Online Training"
            content="To make the most of your time at the live workshop, you’ll have a little pre-work to complete. You’ll get a planning workbook and online training to help you with this work on your audience and the main problem you’re going to solve. Then in the workshop, you’ll have the opportunity to get feedback and clarify this. This is key to do before you arrive as this strong foundation will ensure you create the right program your clients will want to sign up for."
          />
          <Blurb
            horizontal
            image={MedialList2Img}
            heading="3 day Live in Person Workshop"
            content="Stephanie will facilitate the small group workshop to walk you through the framework and help you apply it to your own practice. You’ll collaborate and mastermind with your small group, access real time feedback and get work done. You’ll leave with a clear outline on your program and implementation."
          />
          <Blurb
            horizontal
            image={MedialList3Img}
            heading="4 months of Live Office Hours"
            content="After you’ve outlined your program, enrollment process, marketing, launch and evaluation details, you’ll be sent home to implement. We know you’ll have follow-up questions as you take action and get your program out to your clients. To help you with any obstacles that come up as you do so, you’ll have access to monthly office hours with our facilitators."
          />
        </MediaList>
      </Container>
    </section>
    <section className="section bonuses text-center">
      <h2>Workshop Bonuses:</h2>
      <p className="larger">
        With the live workshop, you’ll get these bonuses:
      </p>
      <p>
        Digital & print planner <br />
        Library of templates and done-for-you resources <br />
        Access to private alumni community
      </p>
      <PriceChart />
    </section>
    <section className="section dates">
      <Container className="text-center">
        <h2>Live Workshop Dates</h2>
        <Row>
          <Col>
            <RegisterBox color="#16272c" heading="May 8 to 10" />
          </Col>
          <Col>
            <RegisterBox color="#4d6265" heading="July 24 to 26" />
          </Col>
        </Row>
      </Container>
    </section>
    <QuestionsCTA />
  </Layout>
)

export default IndexPage
