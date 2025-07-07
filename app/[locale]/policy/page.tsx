'use client';
import React from 'react'

function Policy() {
  return (
    <div className='policy_page'>
      <div className='custom_container'>
        <div className='page_title'>Pravicy Policy</div>
        <div className='block_title'>Your Privacy, Our Responsibility</div>
        <div className='block_desc'>
          At ZEPYUR, we are committed to protecting your personal information and ensuring transparency in how we collect, use, and store data. We believe that your trust begins with knowing exactly what happens behind the scenes when you visit our website or interact with our services.
        </div>
        <hr />
        <div className='block_title'>1. What We Collect</div>
        <div className='block_desc'>
          We may collect basic personal information when you:
          <ul>
            <li>Fill out contact forms</li>
            <li>Upload images to the “Share With Us” section</li>
            <li>Subccribe to updates or register interest in a property</li>
          </ul>
        </div>
        <div className='block_desc'>
          This may include:
          <ul>
            <li>Your name and contact details (Phone/email)</li>
            <li>Uploaded media (Photos or video)</li>
            <li>Optional demographic information</li>
          </ul>
        </div>

        <div className='block_title'>2.How We Use Your Data</div>
        <div className='block_desc'>
          Your information is used solely for:
          <ul>
            <li>Responding to inquiries and providing support</li>
            <li> Communicating updates about ZEPYUR</li>
            <li> Featuring submitted images (with consent) on the website</li>
            <li>Improving our community engagement</li>
          </ul>
          We do not share or sell your information to third parties. Your data stays with us - safely stored, responsibly managed.
        </div>
        <div className='block_title'>3.Data Protection</div>
        <div className='block_desc'>
          All data is stored securely, with restricted access and encryption where applicable. We use industry-standard protocols to safeguard against unauthorized access, alteration, or disclosure.
        </div>
        <div className='block_title'>4. Your Rights</div>
        <div className='block_desc'>
          You may:
          <ul>
            <li>Request access to your personal data</li>
            <li>Ask for corrections or deletion</li>
            <li>Withdraw consent at any time</li>
            <li>Opt-out of marketing communications</li>
          </ul>
          To exercise any of these rights, please contact our Data Compliance Officer at: privacy@zepyur.am
        </div>
        <div className='block_title'>5.Policy Updates</div>
        <div className='block_desc'>
          We may revise this policy from time to time. All updates will be posted on this page with an effective data. Continued use of our website implies acceptance of these terms.        </div>
      </div>
    </div>
  )
}

export default Policy