export default function RecordMeetingsZoomTeamsMeet() {
  return (
    <>
      <p>
        Recording meetings has become standard practice for remote and hybrid
        teams. Whether you use Zoom, Microsoft Teams, or Google Meet, each
        platform offers built-in recording features — but they work differently,
        have different limitations, and leave you with different file formats.
        This guide walks through how to record on each platform, what happens to
        your recordings afterward, and how to actually get value from them.
      </p>

      <h2>Recording on Zoom</h2>
      <p>
        Zoom offers two recording options: local recording (saved to your
        computer) and cloud recording (saved to Zoom&rsquo;s servers, available
        on paid plans).
      </p>
      <ul>
        <li><strong>Step 1</strong> — Start or join a meeting. Only the host or co-host can initiate recording unless the host has enabled recording permissions for participants.</li>
        <li><strong>Step 2</strong> — Click the &ldquo;Record&rdquo; button in the meeting toolbar at the bottom of the screen.</li>
        <li><strong>Step 3</strong> — Choose &ldquo;Record on this Computer&rdquo; for local recording or &ldquo;Record to the Cloud&rdquo; for cloud storage.</li>
        <li><strong>Step 4</strong> — A recording indicator will appear in the top-left corner. All participants will be notified that the meeting is being recorded.</li>
        <li><strong>Step 5</strong> — Click &ldquo;Stop Recording&rdquo; when finished, or the recording will automatically stop when the meeting ends.</li>
        <li><strong>Step 6</strong> — For local recordings, Zoom will convert the file after the meeting ends. Cloud recordings are available in your Zoom account under &ldquo;Recordings.&rdquo;</li>
      </ul>
      <p>
        Zoom recordings are saved as MP4 (video) and M4A (audio only). Cloud
        recordings also include a basic transcript, though accuracy varies.
      </p>

      <h2>Recording on Microsoft Teams</h2>
      <p>
        Teams recording is cloud-based, with files saved to OneDrive or
        SharePoint depending on the meeting type.
      </p>
      <ul>
        <li><strong>Step 1</strong> — Start or join a Teams meeting. Recording is available to meeting organizers and participants from the same organization (unless restricted by admin policy).</li>
        <li><strong>Step 2</strong> — Click the three-dot menu (&ldquo;More actions&rdquo;) in the meeting controls.</li>
        <li><strong>Step 3</strong> — Select &ldquo;Start recording.&rdquo; If transcription is enabled, it will begin automatically alongside the recording.</li>
        <li><strong>Step 4</strong> — A banner notification will inform all participants that recording and transcription have started.</li>
        <li><strong>Step 5</strong> — To stop, click the three-dot menu again and select &ldquo;Stop recording.&rdquo;</li>
        <li><strong>Step 6</strong> — The recording will appear in the meeting chat within minutes. For channel meetings, it is saved to SharePoint. For other meetings, it goes to the recorder&rsquo;s OneDrive.</li>
      </ul>
      <p>
        Teams recordings are saved as MP4 files. The built-in transcription
        feature produces a basic transcript, but it is tied to the Teams
        ecosystem and difficult to export or process further.
      </p>

      <h2>Recording on Google Meet</h2>
      <p>
        Google Meet recording is available on Business Standard, Business Plus,
        Enterprise, and Education Plus plans.
      </p>
      <ul>
        <li><strong>Step 1</strong> — Start or join a Google Meet call. Only the meeting organizer or someone from the same organization can record.</li>
        <li><strong>Step 2</strong> — Click the &ldquo;Activities&rdquo; icon (shapes icon) in the bottom-right corner.</li>
        <li><strong>Step 3</strong> — Select &ldquo;Recording&rdquo; and then click &ldquo;Start recording.&rdquo;</li>
        <li><strong>Step 4</strong> — Confirm the consent notification. All participants will see a red recording indicator.</li>
        <li><strong>Step 5</strong> — To stop, go back to Activities, then Recording, and click &ldquo;Stop recording.&rdquo;</li>
        <li><strong>Step 6</strong> — The recording is saved to the organizer&rsquo;s Google Drive in a &ldquo;Meet Recordings&rdquo; folder. A link is emailed to the organizer and the person who started the recording.</li>
      </ul>
      <p>
        Google Meet recordings are saved as MP4 files in Google Drive. A
        separate transcript file may also be generated if the feature is
        enabled.
      </p>

      <h2>What Happens After Recording</h2>
      <p>
        This is where the real problem begins. You now have an audio or video
        file sitting in cloud storage. To get any value from it, someone needs
        to listen to the entire recording, take notes, and distribute those
        notes to the team. In practice, this rarely happens. The recording sits
        in a folder, unlistened and unprocessed.
      </p>
      <p>
        The built-in transcription features on Zoom, Teams, and Meet produce
        basic transcripts, but these are often inaccurate, poorly formatted, and
        locked within each platform&rsquo;s ecosystem. A raw transcript of a
        60-minute meeting is thousands of words long — reading it takes nearly
        as long as attending the meeting.
      </p>

      <h2>Turning Recordings into Structured Output</h2>
      <p>
        The solution is to process your recordings through an audio intelligence
        tool that generates structured outputs automatically. Instead of reading
        a raw transcript, you get:
      </p>
      <ul>
        <li><strong>A concise summary</strong> — The key points from the meeting in a few paragraphs</li>
        <li><strong>Extracted tasks</strong> — Action items pulled from the conversation with assignees</li>
        <li><strong>An action plan</strong> — Next steps organized by priority</li>
        <li><strong>A formal report</strong> — Shareable documentation for stakeholders who were not present</li>
      </ul>
      <p>
        Tools like Sythio accept audio files from any platform — just download
        the recording from Zoom, Teams, or Meet and upload it. Within seconds,
        you have structured outputs that make the recording genuinely useful.
      </p>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Always inform participants</strong> — Most platforms display a recording indicator, but it is good practice to verbally confirm at the start of the meeting.</li>
        <li><strong>Use audio-only when possible</strong> — Audio files are smaller and faster to process. Unless you need the video, record audio only to save storage and processing time.</li>
        <li><strong>Process immediately</strong> — Do not let recordings accumulate. Process each recording the same day while the context is fresh.</li>
        <li><strong>Choose the right output</strong> — Not every meeting needs a full report. A quick summary may be sufficient for a standup, while a client call might need a detailed action plan.</li>
        <li><strong>Centralize your outputs</strong> — Store the structured outputs (summaries, tasks, reports) in a shared location where the whole team can access them. The original recording is the backup, not the primary reference.</li>
      </ul>
      <p>
        Recording is the easy part. The value comes from what you do with the
        recording afterward. Build a workflow that processes every meeting
        recording into structured output, and you will never have another
        unlistened recording gathering dust in cloud storage.
      </p>
    </>
  );
}
