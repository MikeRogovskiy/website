import React, { Component, Fragment } from 'react';
import ReactHtmlParser from "react-html-parser";
import MainHeader from '../../components/MainHeader';

import './Privacy.scss';


export default class Privacy extends Component {

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    };

    render() {

        return (
            <Fragment>
                <MainHeader />

                <div className="Privacy">

                    <br />
                    <br />
                    <br />
                    <h1>Terms of Use</h1>

                    <br />
                    <h2>Introduction and Acceptance</h2>
                    <p>Please read these terms of use carefully before using EASYLANG SERVICE (hereinafter, "us", "we", service, 
                        "EASYLANG"or "EASYLANG SERVICE"). By accessing and/or using EASYLANG SERVICE (other than to read these terms 
                        of use for the first time) you are agreeing to comply with these terms of use, which may change from time 
                        to time as set forth in section 16 below. if you do not agree to be bound by these terms of use, do not access 
                        or use EASYLANG SERVICE.
                    </p>
                    <p>You agree that these Terms of Use are supported by good and valuable consideration the receipt and sufficiency of which you hereby acknowledge. 
                        Such consideration includes, without limitation, your use of EASYLANG SERVICE and the materials and information available on the same.
                    </p>
                    <p>In addition to these Terms of Use, EASYLANG SERVICE has established a Privacy Policy to explain how user 
                        information is collected and used by EASYLANG SERVICE. A copy of this Privacy Policy can be found 
                        here: https://www.easy4learn.com/privacy/ and is incorporated by reference into these Terms of Use. 
                        By accessing or using any of our Service, you are signifying your acknowledgement 
                        and agreement to EASYLANG SERVICE's Privacy Policy.
                    </p>
                    <br/>
                    <h2>Intellectual Property</h2>
                    <p>EASYLANG SERVICE and included content (and any derivative works or enhancements of the same) including, 
                        but not limited to, all text, illustrations, files, images, software, scripts, graphics, photos, sounds, music, 
                        videos, information, content, materials, products, services, URLs, technology, documentation, player, tutor and 
                        interactive features (collectively, the "Service Content") and all intellectual property rights to the same are 
                        owned by us, our licensors, or both. Additionally, all trademarks, service marks, trade names and trade dress that 
                        may appear on our Service are owned by us, our licensors, or both. You shall not acquire any right, title or 
                        interest in our Service or any Service Content. Any rights not expressly granted in these Terms of Use are 
                        expressly reserved.
                    </p>
                    <br />
                    <h2>EASYLANG SERVICE Access and Use</h2>
                    <p>When accessing our Service, including without limitation to the Service Content, 
                            you agree to comply with all local laws including, without limitation copyright law. 
                            Except as expressly permitted in these Terms of Use, you may not use, reproduce, distribute, 
                            create derivative works based upon, publicly display, publicly perform, publish, transmit, or 
                            otherwise exploit Service Content for any purpose whatsoever without obtaining prior written consent 
                            from us or, in the case of third-party content, its respective owner. You acknowledge that you do not 
                            acquire any ownership rights by downloading or printing Service Content.
                    </p>
                    <br />
                    <p>Furthermore, except as expressly permitted in these Terms of Use, you may not:</p>
                    <ol>
                        <li>remove, alter, cover, or distort any copyright, trademark, or other proprietary 
                            rights notice on EASYLANG SERVICE or Service Content;
                        </li>
                        <li>circumvent, disable or otherwise interfere with security-related features of our 
                            Service including, without limitation, any features that prevent or restrict use or copying 
                            of any content or enforce limitations on the use of our Service or Service Content;
                        </li>
                        <li>use an automatic device (such as a robot or spider) or manual process to copy or "scrape" our 
                            Service or Service Content for any purpose without the express written permission of EASYLANG SERVICE. 
                            Notwithstanding the foregoing, EASYLANG SERVICE grants public search engine operators permission to use 
                            automatic devices (such as robots or spiders) to copy Website Content from our Websites for the sole purpose 
                            of creating (and only to the extent necessary to create) a searchable index of Website 
                            Content that is available to the public. EASYLANG SERVICE reserves the right to revoke 
                            this permission (generally or specifically) at any time;
                        </li>
                        <li>collect or harvest any personally identifiable information from our Service including, without limitation, 
                            user names, passwords, email addresses;
                        </li>
                        <li>solicit other users to join or become members of any commercial online service or other 
                            organization without our prior written approval;
                        </li>
                        <li>attempt to or interfere with the proper working of our Service or impair, 
                            overburden, or disable the same;
                        </li>
                        <li>decompile, reverse engineer, or disassemble any portion of any our Service;</li>
                        <li>use network-monitoring software to determine architecture of or extract usage data from any of our Service;</li>
                        <li>encourage conduct that violates any loca law, either civil or criminal, or impersonate another user, 
                            person, or entity (e.g., using another person's Membership 
                            (as defined in Section B) without permission, etc.);
                        </li>
                        <li>violate Law of the Republic of Belarus on Copyright and Related Rights, Section 56. Protection of Copyright or Related Rights, 
                            export laws, including, without limitation;
                        </li>
                        <li>engage in any conduct that restricts or inhibits any other user from using or enjoying our Service.</li>
                    </ol>
                    <p>You agree to cooperate fully with EASYLANG SERVICE to investigate any suspected or actual activity that is in breach of these Terms of Use.</p>
                    <br />
                    <h2>User Registration</h2>

                    <p>In order to access or use some features of EASYLANG SERVICE, you will have to become a registered user.</p>
                    <br />
                    <p>If you become a registered user, you will provide true, accurate and complete registration information and, 
                        if such information changes, you will promptly update the relevant registration information. During registration, 
                        you will create a user profile with email and password (a "Membership"), which may permit you access to certain areas 
                        of our Service not available to non-registered users. You are responsible for safeguarding and maintaining the 
                        confidentiality of your Membership. You are solely responsible for the activity that occurs under your Membership, 
                        whether or not you have authorized the activity. You agree to notify us immediately at https://www.easy4learn.com/contact/ 
                        of any breach of security or unauthorized use of your Membership.
                    </p>
                    <br />
                    <h2>User Content</h2>
                    <p>We may now or in the future permit users to post, upload, transmit through, 
                        or otherwise make available on our Service (collectively, "submit") messages, 
                        templates, text, illustrations, files, images, graphics, photos, comments, sounds, 
                        music, videos, information, content, and/or other materials ("User Content"). 
                        Subject to the rights and license you grant herein, you retain all right, title and interest 
                        in your User Content. We do not guarantee any confidentiality with respect to User Content even 
                        if it is not published on our Service. It is solely your responsibility to monitor and protect 
                        any intellectual property rights that you may have in your User Content, and we do not accept 
                        any responsibility for the same.
                    </p>
                    <p>You shall not submit any User Content protected by copyright, trademark, patent, trade secret, moral right, or other intellectual 
                        property or proprietary right without the express permission of the owner of the respective right. You are solely liable for any 
                        damage resulting from your failure to obtain such permission or from any other harm resulting from User Content that you submit.
                    </p>
                    <br />
                    <p>You represent, warrant, and covenant that you will not submit any User Content that:</p>
                    <ol>
                        <li>violates or infringes in any way upon the rights of others, including, but not limited to, any copyright, trademark, 
                            patent, trade secret, moral right, or other intellectual property 
                            or proprietary right of any person or entity;</li>
                        <li>impersonates another or is unlawful, threatening, abusive, libelous, defamatory, 
                            invasive of privacy or publicity rights, vulgar, obscene, profane, pornographic, 
                            or otherwise objectionable;</li>
                        <li>encourages conduct that would constitute a criminal offense, give rise to civil 
                            liability or otherwise violate any law;</li>
                        <li>is an advertisement for goods or services or a solicitation of funds;</li>
                        <li>includes personal information such as messages which identify phone numbers, social security 
                            numbers, account numbers, addresses, or employer references;</li>
                        <li>contains a formula, instruction, or advice that could cause harm or injury;</li>
                        <li>is a chain letter of any kind.</li>
                    </ol>
                    <br />
                    <p>Moreover, any conduct by a user that in our sole discretion restricts or inhibits any other user from 
                        using or enjoying our Service will not be permitted.
                    </p>
                    <p>By submitting User Content to us, simultaneously with such posting you automatically grant, 
                        or warrant that the owner has expressly granted, to us a worldwide, royalty-free, perpetual, 
                        irrevocable, non-exclusive, fully sublicensable, and transferable right and license to use, 
                        reproduce, distribute, create derivative works based upon (including, without limitation, translations), 
                        publicly display, publicly perform, transmit, and publish the User Content (in whole or in part) as we, 
                        in our sole discretion, deem appropriate including, without limitation, (1) in connection with our 
                        business; and (2) in connection with the businesses of our successors, parents, subsidiaries, and 
                        their related companies. We may exercise this grant in any format, media or technology now known or 
                        later developed for the full term of any copyright that may exist in such User Content. Furthermore, 
                        you also grant other users permission to access your User Content and to use, reproduce, distribute, 
                        create derivative works based upon, publicly display, publicly perform, transmit, and publish your 
                        User Content for personal, non-commercial use as permitted by the functionality of any of our Service 
                        and these Terms of Use.
                    </p>
                    <p>By submitting User Content, you also grant us the right, but not the obligation to use your biographical 
                        information including, without limitation, your name and geographical location in connection with broadcast, 
                        print, online, or other use or publication of your User Content. Notwithstanding the foregoing, you waive any 
                        and all claims you may now or later have in any jurisdiction to so-called "moral rights" or rights of "droit 
                        moral" with respect to the User Content.
                    </p>
                    <p>We reserve the right to display advertisements in connection with your User Content and to use your User 
                        Content for advertising and promotional purposes. You acknowledge and agree that your User Content may 
                        be included on the Service and advertising networks of our distribution partners and third-party service 
                        providers (including their downstream users).
                    </p>
                    <p>We have the right, but not the obligation, to monitor User Content. We have the right in our sole discretion 
                        and for any reason whatsoever to edit, refuse to post, remove, or disable access to any User Content.
                    </p>
                    <br />
                    <h2>Service Content and Third Party Links</h2>
                    <p>We provide our Service and Website Content, for the commercial, entertainment and promotional purposes of providing 
                        web-based services for the web design and web development of others. You may not rely on any information and opinions 
                        expressed on any of our Service for any other purpose. In all instances, it is your responsibility to evaluate the 
                        accuracy, timeliness, completeness, or usefulness of Website Content. Under no circumstances will we be liable for any 
                        loss or damage caused by your reliance on any Service Content.
                    </p>
                    <p>In many instances, Service Content will include content posted by a third-party or will represent the opinions and judgments 
                        of a third-party. We do not endorse, warrant and are not responsible for the accuracy, timeliness, completeness, or reliability 
                        of any opinion, advice, or statement made on our Service by anyone other than authorized employees or spokespersons while acting 
                        in their official capacities.
                    </p>
                    <p>If there is a dispute between persons accessing our Service or between persons accessing our Service and any third party, you 
                        understand and agree that we are under no obligation to become involved. If there is such a dispute, you hereby release 
                        EASYLANG SERVICE and its officers, directors, employees, parents, partners, successors, agents, affiliates, subsidiaries, 
                        and their related companies from claims, demands, and damages of every kind or nature arising out of, relating to, or in 
                        any way connected with such dispute.
                    </p>
                    <p>Our Service may contain links to other Service maintained by third parties. We do not operate or control, in any respect, 
                        or necessarily endorse the content found on these third-party Service. You assume sole responsibility for your use of 
                        third-party links. We are not responsible for any content posted on third-party Service or liable to you for any loss 
                        or damage of any sort incurred as a result of your dealings with any third-party or their website.
                    </p>
                    <br />
                    <h2>Indemnification</h2>
                    <p>You agree to indemnify and hold harmless EASYLANG SERVICE and its officers, directors, employees, parents, partners, 
                        successors, agents, distribution partners, affiliates, subsidiaries, and their related companies from and against any 
                        and all claims, liabilities, losses, damages, obligations, costs and expenses (including reasonable attorneys' fees and costs) 
                        arising out of, related to, or that may arise in connection with: (I) your access to or use of any of our Service; (II) 
                        User Content provided by you or through use of your Membership; (III) any actual or alleged violation or breach by you 
                        of these Terms of Use; (IV) any actual or alleged breach of any representation, warranty, or covenant that you have made 
                        to us; or (V) your acts or omissions. You agree to cooperate fully with us in the defense of any claim that is the subject 
                        of your obligations hereunder.
                    </p>
                    <br />
                    <h2>Disclaimers</h2>
                    <p>YOU EXPRESSLY AGREE THAT USE OF OUR SERVICE IS AT YOUR SOLE RISK. OUR SERVICE AND WEBSITE CONTENT ARE PROVIDED ON 
                        AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED. WITHOUT LIMITING 
                        THE FOREGOING AND TO THE FULLEST EXTENT PERMITTED BY LAW, EASYLANG SERVICE AND ITS OFFICERS, DIRECTORS, 
                        EMPLOYEES, PARENTS, PARTNERS, SUCCESSORS, AGENTS, DISTRIBUTION PARTNERS, AFFILIATES, SUBSIDIARIES, AND 
                        THEIR RELATED COMPANIES DISCLAIM ANY AND ALL WARRANTIES INCLUDING ANY: (1) WARRANTIES THAT THE SERVICE WILL 
                        MEET YOUR REQUIREMENTS; (2) WARRANTIES CONCERNING THE AVAILABILITY, ACCURACY, SECURITY, USEFULNESS, TIMELINESS, 
                        OR INFORMATIONAL CONTENT OF THE EASYLANG SERVICE; (3) WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, 
                        OR FITNESS FOR A PARTICULAR PURPOSE; (4) WARRANTIES FOR SERVICES OR GOODS RECEIVED THROUGH OR ADVERTISED ON 
                        OUR SERVICE OR ACCESSED THROUGH ANY OF OUR SERVICE; (5) WARRANTIES CONCERNING THE ACCURACY OR RELIABILITY OF 
                        THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE; (6) WARRANTIES THAT YOUR USE OF THE SERVICE WILL 
                        BE SECURE OR UNINTERRUPTED; AND (7) WARRANTIES THAT ERRORS IN THE SOFTWARE WILL BE CORRECTED.
                    </p>
                    <br />
                    <h2>Limitation on Liability</h2>
                    <p>UNDER NO CIRCUMSTANCES SHALL EASYLANG SERVICE OR ITS OFFICERS, DIRECTORS, EMPLOYEES, PARENTS, PARTNERS, SUCCESSORS,
                         AGENTS, DISTRIBUTION PARTNERS, AFFILIATES, SUBSIDIARIES, OR THEIR RELATED COMPANIES BE LIABLE FOR INDIRECT, 
                         INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES (EVEN IF EASYLANG SERVICE HAS BEEN ADVISED OF THE 
                         POSSIBILITY OF SUCH DAMAGES), ARISING OUT OF, RELATING TO, OR IN ANY WAY CONNECTED WITH OUR SERVICE OR THESE 
                         TERMS OF USE. YOUR SOLE REMEDY FOR DISSATISFACTION WITH OUR SERVICE INCLUDING, WITHOUT LIMITATION, THE SERVICE 
                         CONTENT IS TO STOP USING OUR SERVICE. SUCH LIMITATION SHALL ALSO APPLY WITH RESPECT TO DAMAGES INCURRED BY 
                         REASON OF SERVICES OR PRODUCTS RECEIVED THROUGH OR ADVERTISED IN CONNECTION WITH ANY OF OUR SERVICE OR ANY LINKS 
                         ON OUR SERVICE, AS WELL AS BY REASON OF ANY INFORMATION OR ADVICE RECEIVED THROUGH OR ADVERTISED IN CONNECTION 
                         WITH ANY OF OUR SERVICE OR ANY LINKS ON OUR SERVICE. SUCH LIMITATION SHALL ALSO APPLY WITH RESPECT TO DAMAGES 
                         INCURRED BY REASON OF ANY CONTENT POSTED BY A THIRD-PARTY OR CONDUCT OF A THIRD-PARTY ON OUR SERVICE.
                    </p>
                    <p>NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, IN NO EVENT SHALL THE CUMULATIVE LIABILITY OF EASYLANG 
                        SERVICE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, PARENTS, PARTNERS, SUCCESSORS, AGENTS, DISTRIBUTION PARTNERS, 
                        AFFILIATES, SUBSIDIARIES, AND THEIR RELATED COMPANIES EXCEED THE GREATER OF THE TOTAL PAYMENTS RECEIVED FROM 
                        YOU BY EASYLANG SERVICE DURING THE PRECEDING TWELVE (12) MONTH PERIOD OR 10 BYN. FURTHERMORE, YOU AGREE THAT 
                        ANY CAUSE OF ACTION ARISING OUT OF, RELATING TO, OR IN ANY WAY CONNECTED WITH ANY OF OUR Service OR THESE TERMS 
                        OF USE MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES; OTHERWISE, SUCH CAUSE OF ACTION SHALL 
                        BE PERMANENTLY BARRED.
                    </p>
                    <br />
                    <p>In some jurisdictions limitations of liability are not permitted. In such jurisdictions, some of the foregoing limitations 
                        may not apply to you. These limitations shall apply to the fullest extent permitted by law.
                    </p>
                    <br />
                    <h2>Termination</h2>
                    <p>We reserve the right in our sole discretion and at any time to terminate or suspend your Membership and/or block 
                        your access to our Service for any reason including, without limitation if you have failed to comply with the 
                        letter and spirit of these Terms of Use. You agree that EASYLANG SERVICE shall not be liable to you or any third 
                        party for any termination or suspension of your Membership or for blocking your access to our Service.
                    </p>
                    <p>If you become a registered user, you may terminate your Membership at any time by going to Membership page 
                        and selecting the appropriate option.
                    </p>
                    <p>Any suspension or termination shall not affect your obligations to us under these Terms of Use. The provisions of these Terms of Use 
                        which by their nature should survive the suspension or termination of your Membership or these Terms of Use shall survive including,
                        but not limited to the rights and licenses that you have granted hereunder, indemnities, releases, disclaimers, limitations on 
                        liability, provisions related to choice of law, dispute resolution, no class action, no trial by jury and all of the miscellaneous 
                        provisions in Section 13.
                    </p>
                    <br  />
                    <h2>Copyright Policy</h2>
                    <p>EASYLANG SERVICE respects the intellectual property rights of others and expects its users to do the same. In appropriate circumstances 
                        and at its sole discretion, EASYLANG SERVICE may terminate and/or disable the Membership of users who it suspects to be infringers of 
                        the copyrights (or other intellectual property rights) of others. Additionally, in appropriate circumstances and in its sole discretion,
                        EASYLANG SERVICE may remove or disable access to material on any of its Service or hosted on its systems that may be infringing or 
                        the subject of infringing activity.
                    </p>
                    <br />
                    <p>In accordance with theLaw of the Republic of Belarus on Copyright and Related Rights, Section 56. Protection of Copyright or Related Rights, 
                        we will respond promptly to claims of copyright infringement that are reported to the agent that we have designated to receive notifications 
                        of claims infringement (its "Designated Agent"). EASYLANG SERVICE's Designated Agent is:
                    </p>
                    <ul>
                        <li><b>Physical Mail:</b></li>
                        <li>Attn: EasyLang Comp.,</li>
                        <li>Republic of Belarus, Minsk</li>
                        <li>Tolbuhina str., 2/315. 220012</li>
                        <br />
                        <li><b>Email:</b> support@easylang.app</li>
                    </ul>
                    <br />
                    <p>If you are a copyright owner (or authorized to act on behalf of the copyright owner) and believe that your work's copyright has been infringed,
                        please report your notice of infringement to us by providing our Designated Agent with a written notification of claimed infringement 
                        that includes substantially the following:
                    </p>
                    <ol>
                        <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                        <li>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered 
                            by a single notification, a representative list of such works at that site.</li>
                        <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access 
                            to which is to be disabled, and information reasonably sufficient to permit us to locate the material.</li>
                        <li>Information reasonably sufficient to permit us to contact you, such as an address, telephone number, and, if available, an electronic mail 
                            address at which you may be contacted.</li>
                        <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, 
                            its agent, or the law.</li>
                        <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of 
                            the owner of an exclusive right that is allegedly infringed.</li>
                    </ol>
                    <br />
                    <p>We will investigate notices of copyright infringement and take appropriate actions under the Law of the Republic of Belarus on Copyright and Related Rights, Section 56. Protection of Copyright or Related Rights. 
                        Inquiries that do not follow this procedure may not receive a response.
                    </p>
                    <br />
                    <h2>Choice of Law</h2>
                    <p>We are responsible for the content posted by us on the EasyLang Service,
                        within the limits established by the legislation of the Republic of Belarus.
                    </p>
                    <br />
                    <h2>Miscellaneous</h2>
                    <p>No waiver by either party of any breach or default hereunder shall be deemed to be a waiver of any preceding or 
                        subsequent breach or default. The section headings used herein are for convenience only and shall not be given 
                        any legal import. If any provision of these Terms of Use is held to be invalid or unenforceable, the invalidity 
                        of such provision shall not affect the validity of the remaining provisions of the Terms of Use, which shall 
                        remain in full force and effect.
                    </p>
                    <p>These Terms of Use (including the Privacy Policy and any Additional Terms incorporated by reference) constitute the 
                        entire agreement of the parties with respect to the subject matter hereof, and supersede all previous written or 
                        oral agreements between us with respect to such subject matter.
                    </p>
                    <p>You may not assign these Terms of Use or assign any rights or delegate any obligations hereunder, in whole or in part, without our prior written consent. Any such purported assignment or delegation by you without 
                        the appropriate prior written consent will be null and void and of no force and effect. EASYLANG SERVICE may assign these Terms of 
                        Use or any rights hereunder without your consent and without notice.
                    </p>
                    <br />
                    <h2>Notices</h2>
                    <p>All notices, requests, and communications hereunder shall be in writing, and any such notice, request or other communication shall be deemed to have been given or made when delivered by hand, transmitted by fax 
                        and confirmed or, in the case of delivery by mail, when deposited in the mail, certified mail, return receipt requested, postage 
                        prepaid, to: EASYLANG, Republic of Belarus, Minsk, Tolbuhina str., 2/315. 220012.
                    </p>
                    <section id="footer">
                        <p className="copy">© 2020 EASYLANG CO. All rights reserved.</p>
                    </section>
                </div >
            </Fragment >

        );

    };

};
