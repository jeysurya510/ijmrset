import NavBar from '../components/NavBar_1';
import Footer from '../components/Footer';
import EmailImpactCheck from '../components/EmailImpactCheck';

import AnimatedText from '../utils/Animationtext';

import Impactfactor from '../assets/impactFactor-black.gif';
import Check from '../assets/check-black.gif';
import Email from '../assets/email_black.gif';
import policies from '../assets/policies.png';
import COPE from '../assets/COPE.jpg';

export default function Policies() {
  return (
    <div className="bg-color3 min-h-screen ">
      <NavBar SubNavColor={'bg-slate-200'} NavColor={'bg-slate-200'} Scroll={'contact-section-1'} />
      <section id="contact-section-1" className="pt-10 text-black overflow-hidden">
        <p className="lg:text-[34px] text-[14px]  text-center font-Libre_Baskerville leading-relaxed font-medium ">
          International Journal of Multidisciplinary Research in <br />
          <span className=" font-Libre_Baskerville italic ">
            <AnimatedText text={'Science, Engineering, and Technology'} />
          </span>
        </p>
        <div className="font-semibold hidden lg:flex items-center justify-center text-center font-lora">
          <img src={Email} className="w-7 h-7 mr-2" alt="Email" />
          <p className="mr-4">ijmrset@gmail.com</p>

          <img src={Impactfactor} className="w-7 h-7 mr-2" alt="Impact Factor" />
          <p className="mr-4">Impact Factor: 7.521</p>

          <img src={Check} className="w-7 h-7 mr-2" alt="Check" />
          <p>Compliant with UGC CARE Journal Norms and Guidelines</p>
        </div>
        <EmailImpactCheck theme={'dark'} />
      </section>

      <div className="py-5 ">
        <div className="flex justify-center items-center  bg-white">
          <img src={policies} alt="" className="lg:h-[300px] h-[200px]" />
        </div>
        <div className="p-5 space-y-3">
          <h1 className="font-lora text-left lg:text-2xl text-xl font-semibold py-5">1.Plagiarism Policy:</h1>

          <p className="font-Inter text-left text-lg">
            Plagiarism is using, without acknowledgement, someone else?s ideas or work. You must
            both delineate (i.e., separate and identify) the copied text from your text and give
            credit to (i.e., cite the source) the source of the copied text to avoid accusations of
            plagiarism. Plagiarism is considered fraud and has potentially harsh consequences
            including loss of job, loss of reputation, and the assignation of reduced or failing
            grade in a course. Institutions that are prepared to prevent or handle plagiarism
            benefit from higher levels of academic honesty. This section contains best practices and
            advice for building academic integrity policies to support your education community. If
            you submit an assignment that contains work that is not your own, without clearly
            indicating this to the marker (fully acknowledging your sources using the rules of the
            specified academic referencing style), you are committing ? plagiarism? and this is
            academic misconduct. It is important to understand that if you do not acknowledge fully
            the sources that have contributed to and informed your work you are misrepresenting your
            knowledge and abilities.
          </p>
          <p className="font-Inter text-left text-lg">
            All manuscripts submitted for publication to IJMRSET are cross-checked for Plagiarism /
            Similarity Index using Turnitin / PlagScan software.
          </p>

          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">
            Common Types of Plagiarism:
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            Direct plagiarism is the word-for-word transcription of a section of someone else?s
            work, without attribution and without quotation marks.
          </p>

          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">
            Self Plagiarism:
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            Self-plagiarism occurs when a student submits his or her own previous work, or mixes
            parts of previous works, without permission from all professors involved.
          </p>
          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">
            Mosaic Plagiarism:
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            Mosaic Plagiarism occurs when a student borrows phrases from a source without using
            quotation marks, or finds synonyms for the author?s language while keeping to the same
            general structure and meaning of the original.
          </p>
          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">
            Policy and Action for Plagiarism:
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg text--800">
            IJMRSET respects intellectual property and aims at protecting and promoting original
            work of its authors. Manuscripts containing plagiarized material are against the
            standards of quality, research and innovation. Hence, all authors submitting articles to
            IJMRSET is expected to abide ethical standards and abstain from plagiarism, in any form.
            In case, an author is found to be suspected of plagiarism in a submitted or published
            manuscript then, IJMRSET shall contact the author (s) to submit his / her (their)
            explanation within two weeks, which may be forwarded to the Fact Finding Committee (FFC)
            constituted for the purpose, for further course of action. If IJMRSET does not receive
            any response from the author within the stipulated time period, then the Director / Dean
            / Head of the concerned College, Institution or Organization or the Vice Chancellor of
            the University to which the author is affiliated shall be contacted to take strict
            action against the concerned author.
          </p>

          <p className="font-Inter  text-left lg:text-xl text-lg ">
            IJMRSET shall take serious action against published manuscripts found to contain
            plagiarism and shall completely remove them from IJMRSET website and other third party
            websites where the paper is listed and indexed. The moment, any article published in
            IJMRSET database is reported to be plagiarized, IJMRSET will constitute a Fact Finding
            Committee (FFC) to investigate the same. Upon having established that the manuscript is
            plagiarized from some previously published work, IJMRSET shall support the original
            author and manuscript irrespective of the publisher and may take any or all of the
            following immediate actions or follow the additional course of actions as recommended by
            the committee:
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            IJMRSET editorial office shall immediately contact the Director / Dean / Head of the
            concerned College, Institution or Organization or the Vice Chancellor of the University
            to which the author(s) is (are) affiliated to take strict action against the concerned
            author. IJMRSET shall remove the PDF copy of the published manuscript from the website
            and disable all links to full text articles. The term Plagiarized Manuscript shall be
            appended to the published manuscript title. IJMRSET may also display the list of such
            authors along with their full contact details on the IJMRSET website. Any other course
            of action, as recommended by the Committee or as deemed fit for the instant case or as
            decided by the Editorial Board, from time to time.
          </p>
        </div>
        <div className="p-5 space-y-3">
          <h1 className="font-lora text-left lg:text-2xl text-xl font-semibold py-5">
            2.Publication Ethics Policy:
          </h1>

          <p className="font-Inter text-left text-lg">
            Ethical standards for publication exist to ensure reliable & high-quality scientific
            research publications, public trust in scientific findings, and that researchers receive
            credit for their work & ideas.
          </p>
          <p className="font-Inter text-left text-lg">
            IJMRSET follows strict Code of Conduct and aims to adhere to its Best Practice
            Guidelines.
          </p>

          <div className="flex justify-center items-center w-full">
            <img src={COPE} alt="cope" className="h-[200px] w-fit" />
          </div>

          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">Plagiarism:</p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            All articles published by IJMRSET are committed to publishing only original material,
            i.e., material that has neither been published elsewhere, nor is under review elsewhere.
            Manuscripts that are found to have been plagiarized from a manuscript by other authors,
            whether published or unpublished, will incur plagiarism penalty.
          </p>

          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">
            Duplicate Submission:
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            Manuscripts that are found to have been published elsewhere, or to be under review
            elsewhere, will incur duplicate submission sanctions. If authors have used their own
            previously published work, or work that is currently under review, as the basis for a
            submitted manuscript, they are required to cite the previous work and indicate how their
            submitted manuscript offers novel contributions beyond those of the previous work.
          </p>
          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">
            Improper Author Contribution or Attribution:
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            All listed authors must have made a significant scientific contribution to the research
            in the manuscript and approved all its claims. It is important to list everyone who made
            a significant scientific contribution, including students and laboratory technicians.
          </p>
          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">
            Redundant Publications:
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg text--800">
            Redundant publications involve the inappropriate division of study outcomes into several
            articles.
          </p>
          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">
            Citation Manipulation:
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            Submitted manuscripts that are found to include citations whose primary purpose is to
            increase the number of citations to a given author’s work, or to articles published in a
            particular journal, will incur a citation manipulation penalty.
          </p>
          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">
            Data Fabrication & Falsification:
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            Submitted manuscripts that are found to have either fabricated or falsified experimental
            results, including the manipulation of images, will incur data fabrication and
            falsification penalties.
          </p>
          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">Penalty:</p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            In the event that there are documented violations of any of the above mentioned policies
            of IJMRSET, regardless of whether or not the violations occurred in a journal published
            by ESRSA, the following rules will be applied:
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            Immediate rejection of the infringing manuscript. Immediate rejection of every other
            manuscript submitted to any journal published by IJMRSET by any of the authors of the
            infringing manuscript. Prohibition against all of the authors for any new submissions to
            IJMRSET, either individually or in combination with other authors of the infringing
            manuscript, as well as in combination with any other authors. This prohibition will be
            imposed for a minimum of 2 years. Prohibition against all of the authors from serving on
            the Editorial Board of IJMRSET.
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            Immediate rejection of the infringing manuscript. Immediate rejection of every other
            manuscript submitted to any journal published by IJMRSET by any of the authors of the
            infringing manuscript. Prohibition against all of the authors for any new submissions to
            IJMRSET, either individually or in combination with other authors of the infringing
            manuscript, as well as in combination with any other authors. This prohibition will be
            imposed for a minimum of 2 years. Prohibition against all of the authors from serving on
            the Editorial Board of IJMRSET.
          </p>
          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">Reviewers:</p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            Reviewers must maintain the confidentiality of the review process immediately alert
            their journal editor of any real or potential competing interest that could affect the
            impartiality of their reviewing and decline to review where appropriate conduct
            themselves fairly and impartially
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            We are aware, of course, that academics will come from a particular school of thought
            and/or may have strong ties to a particular interest. All we ask is that reviewers
            strive to act fairly. If in doubt about whether a conflict exists, a reviewer should be
            transparent and seek the views of the journal editor.
          </p>
          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">Editors:</p>
          <p className="font-Inter font-semibold text-left lg:text-xl text-lg ">Editors should:</p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            maintain and promote consistent ethical policies for their journals oversee and act to
            enforce those policies as needed in a fair and consistent manner ensure the
            confidentiality of the review process exercise the highest standards of personal
            integrity in their work as editor of the journal, recognising and planning for instances
            where they could have a competing interest or the appearance of a competing interest
            work with authors, reviewers, and Editorial Board members as necessary to ensure they
            are sufficiently advised regarding their journals’ ethics and publishing policies and
            that the journal’s stewardship on ethical matters is fair, unbiased, and timely.
          </p>
          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">
            Everyone including Editorial Boards:
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            We should promote fairness and equality and oppose discrimination. We should promote the
            transparency of and respect for the academic recordWe should respect the confidentiality
            of others. We should be transparent about real or apparent competing interests.
          </p>
        </div>
        <div className="p-5 space-y-3">
          <h1 className="font-lora text-left lg:text-2xl text-xl font-semibold py-5">3.Open Access Policy:</h1>

          <p className="font-Inter text-left text-lg">
            IJMRSET is loyal to open access for academic work. All the original articles and review
            papers published in this journal are free to access immediately from the date of
            publication. We don’t charge any fees for any reader to download articles and reviews
            for their own scholarly use.
          </p>

          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">
            Benefits of open access for authors, include:
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            Free access for all users world wide Authors retain copyright to their work, Increased
            visibility and readership Rapid publication, No spatial constraints.
          </p>

          <p className="font-Inter  text-left lg:text-xl text-lg ">
            The IJMRSET also operates under the Creative Commons Licence CC-BY. This allows for the
            reproduction of articles, free of charge with the appropriate citation information. All
            authors publishing with the IJMRSET accept these as the terms of publication.
          </p>
        </div>
        <div className="p-5 space-y-3">
          <h1 className="font-lora text-left lg:text-2xl text-xl font-semibold py-5">
            4.Correction, Retraction, Withdrawal Policies:
          </h1>

          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">Corrections:</p>
          <p className="font-Inter font-semibold text-left lg:text-xl text-lg ">Post Publishing:</p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            Formatting or alignment issues can be resolved within 48 hours if the publication record
            is seriously affected with regard to the accuracy of published information based on the
            request raised by the author.
          </p>
          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">Retractions:</p>

          <p className="font-Inter  text-left lg:text-xl text-lg ">
            Notification of invalid results that affect the reliability of a previously published
            article. The original article is marked as retracted but remains available to readers,
            and the retraction statement notifying readers of the invalidity of the published paper
            is bi-directionally linked to the original published paper.
          </p>
          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">
            Withdrawal Policy: :
          </p>

          <p className="font-Inter  text-left lg:text-xl text-lg ">
            Manuscripts may be withdrawn by submitting an email to the editorial office stating the
            reasons for manuscript withdrawal and manuscripts will be withdrawn in 48 to 72 hours.
          </p>
        </div>
        <div className="p-5 space-y-3">
          <h1 className="font-lora text-left lg:text-2xl text-xl font-semibold py-5">5.Complaints Policy:</h1>

          <p className="font-Inter  text-left lg:text-xl text-lg ">
            IJMRSET Journal takes each complaint with seriousness and handles it professionally and
            is guided by COPE’s policies and guidelines. The complainant issue is investigated and
            acted upon. Final decisions are conveyed to the complainant.
          </p>
          <p className="font-Inter font-semibold text-left lg:text-xl text-lg ">
            Journal holds awareness of the following complaints:
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            Authorship complaints Plagiarism Duplicate, multiple, concurrent publication,
            Misappropriation of Research results Allegations of research errors and fraud,
            Violations of Research standards, Undisclosed conflicts of interest Reviewer bias or
            acts of harm out of competition by reviewers
          </p>

          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800">
            Guiding principles:
          </p>

          <p className="font-Inter  text-left lg:text-xl text-lg ">
            Mistakes and complaints are bound to happen during such a hectic process of compiling
            complex material at once. We recognize this fact and strive to address all complaints as
            quickly as possible. We believe that the intensity of problems can be reduced by
            acknowledging them at the right time. As a matter of fact, all the substantial errors
            and complaints are directly referred to Senior Editors.
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            Please address your query in a detailed manner to
            <a href="mailto:ijmrset@gmail.com" className="underline ">
              ijmrset@gmail.com
            </a>
          </p>
          <p className="font-Inter font-semibold text-left lg:text-xl text-lg text-purple-800"></p>
        </div>
        <div className="p-5 space-y-3">
          <h1 className="font-lora text-left lg:text-2xl text-xl font-semibold py-5">6.Refund Policy:</h1>

          <p className="font-Inter  text-left lg:text-xl text-lg ">
            The Authors cannot withdraw the paper after the submission of publication fee (If Paper
            is Accepted). Fees submitted for a research paper will not be refunded as per our
            policy. It means Authors can withdraw their paper before paying the fee. We will not
            charge any review charge in the case of accepted paper.
          </p>
          <p className="font-Inter  text-left lg:text-xl text-lg ">
            In the case of any factual reason we can postpone the publication of your paper in any
            other issue or we can also consider another paper instead of the present paper (that you
            do not want to publish).
          </p>
          <p className="font-Inter  text-left text-xl ">
            The authors who have submitted the extra fee mistakenly will be refunded to the author's
            account within 10 working days. For this authors have to inform us of the discrepancy
            with reason through ijmrset@gmail.com with a fee receipt.
          </p>
        </div>
      </div>

      <Footer />
      <div className="bg-color3 py-4 flex w-full px-5">
        <p className="text-md text-black mx-auto font-Inter">
          Copyright © 2024 IJMRSET All Rights Reserved
        </p>
      </div>
    </div>
  );
}
