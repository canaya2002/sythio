import Link from "next/link";

export default function AudioDataSecurityPrivacy() {
  return (
    <>
      <p>
        Every time you upload a recording to an AI tool, you are handing over
        some of the most sensitive data your organization produces — unfiltered
        conversations between colleagues, clients, patients, or legal counsel.
        The convenience of automated transcription and analysis is real, but so
        are the risks if your provider does not handle that data responsibly.
        Understanding how voice AI tools manage security and privacy is not
        optional — it is essential.
      </p>

      <h2>Where Does Your Audio Go?</h2>
      <p>
        This is the first question to ask any voice AI provider, and the
        answer matters more than most people realize. When you upload audio,
        several things can happen to it:
      </p>
      <ul>
        <li>
          <strong>Processing</strong> — The audio is sent to servers where AI
          models transcribe and analyze it. Is this done on the
          provider&rsquo;s own infrastructure, or routed through third-party
          APIs?
        </li>
        <li>
          <strong>Storage</strong> — Is the original audio file stored after
          processing? For how long? Can you delete it on demand?
        </li>
        <li>
          <strong>Training</strong> — Is your audio used to train or improve AI
          models? This is the most critical question. Some providers use
          customer data for model training by default, meaning your private
          conversations contribute to a shared model.
        </li>
        <li>
          <strong>Access</strong> — Who at the provider can access your audio
          or transcripts? Are there internal access controls, audit logs, and
          employee background checks?
        </li>
      </ul>
      <p>
        If a provider cannot answer these questions clearly, that is a red
        flag.
      </p>

      <h2>Encryption Standards</h2>
      <p>
        Encryption is the baseline. Any reputable voice AI tool should
        implement encryption at two levels:
      </p>
      <ul>
        <li>
          <strong>In transit (TLS 1.3)</strong> — All data moving between your
          device and the provider&rsquo;s servers should be encrypted using
          TLS 1.3, the latest transport layer security protocol. This prevents
          interception during upload and download.
        </li>
        <li>
          <strong>At rest (AES-256)</strong> — Stored audio files and
          transcripts should be encrypted using AES-256, the same standard
          used by banks and government agencies. Even if someone gains
          unauthorized access to the storage system, the data remains
          unreadable without the encryption keys.
        </li>
      </ul>
      <p>
        Beyond these standards, look for key management practices. Are
        encryption keys rotated regularly? Are they stored separately from the
        data they protect? Hardware security modules (HSMs) are the gold
        standard for key management.
      </p>

      <h2>Data Retention Policies</h2>
      <p>
        How long a provider keeps your data matters as much as how they
        protect it. Key questions include:
      </p>
      <ul>
        <li>
          Is audio deleted automatically after processing, or retained
          indefinitely?
        </li>
        <li>
          Can you configure retention periods to match your own compliance
          requirements?
        </li>
        <li>
          When you delete a file, is it truly purged from all systems —
          including backups and caches — or just hidden from the interface?
        </li>
        <li>
          What happens to your data if you cancel your account?
        </li>
      </ul>
      <p>
        The best providers offer configurable retention, immediate deletion on
        request, and clear documentation of their data lifecycle.
      </p>

      <h2>Compliance Frameworks</h2>
      <p>
        Depending on your industry, you may need your voice AI provider to
        comply with specific regulatory frameworks:
      </p>
      <ul>
        <li>
          <strong>GDPR</strong> — Required for any organization processing data
          of EU residents. Look for data processing agreements, right-to-erasure
          support, and EU-based or EU-adequate data processing locations.
        </li>
        <li>
          <strong>SOC 2 Type II</strong> — An audit-based certification that
          validates a provider&rsquo;s security controls over time. SOC 2
          Type II (not just Type I) means the controls have been tested and
          verified over a sustained period.
        </li>
        <li>
          <strong>HIPAA</strong> — Required for healthcare-related audio. If
          your recordings involve patient information, your provider must sign
          a Business Associate Agreement and implement HIPAA-compliant
          safeguards.
        </li>
      </ul>
      <p>
        Compliance is not just about checking boxes. It signals that a provider
        has invested in the infrastructure, processes, and third-party audits
        necessary to protect sensitive data.
      </p>

      <h2>Questions to Ask Your Provider</h2>
      <p>
        Before committing to any voice AI tool, get clear answers to these
        questions:
      </p>
      <ul>
        <li>Is my audio used to train your models? Can I opt out?</li>
        <li>Where is my data processed and stored geographically?</li>
        <li>
          What encryption is applied in transit and at rest? What key
          management practices are in place?
        </li>
        <li>
          What is your data retention policy? Can I configure it or request
          immediate deletion?
        </li>
        <li>
          Which compliance certifications do you hold, and can you provide
          audit reports?
        </li>
        <li>
          Do you use third-party sub-processors? If so, which ones, and what
          data do they access?
        </li>
        <li>
          What happens to my data if I cancel my subscription?
        </li>
      </ul>

      <h2>How Sythio Handles Security</h2>
      <p>
        At <Link href="/">Sythio</Link>, security is not an afterthought — it
        is built into how the platform operates. Audio files are encrypted in
        transit using TLS 1.3 and at rest using AES-256. Files are processed
        and can be deleted on demand. Your audio is never used to train models.
        Access controls ensure that only you see your data.
      </p>
      <p>
        The convenience of AI-powered audio intelligence should never come at
        the cost of your privacy. When evaluating any tool in this space,
        hold providers to the same security standards you would apply to any
        system that handles your most sensitive conversations — because that
        is exactly what they are.
      </p>
    </>
  );
}
