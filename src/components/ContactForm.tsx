"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { contactCategories } from "@/src/data/company";

type FormState = {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  category: string;
  message: string;
  privacy: boolean;
};

const initialState: FormState = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  category: "",
  message: "",
  privacy: false,
};

const labelClass = "grid gap-2 text-sm font-bold text-white";
const fieldClass =
  "min-h-12 rounded-lg border border-white/10 bg-[#111111] px-3 text-base font-normal text-white transition placeholder:text-zinc-500 focus:border-[#f97316] focus:outline-none";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<string[]>([]);
  const [status, setStatus] = useState("");

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // 送信先未設定のため、送信前の最低限の入力チェックのみ行います。
    const nextErrors: string[] = [];
    if (!form.name.trim()) nextErrors.push("お名前を入力してください。");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.push("メールアドレスを正しく入力してください。");
    if (!form.category) nextErrors.push("お問い合わせ種別を選択してください。");
    if (form.message.trim().length < 10) nextErrors.push("お問い合わせ内容は10文字以上で入力してください。");
    if (!form.privacy) nextErrors.push("個人情報の取り扱いへの同意が必要です。");

    setErrors(nextErrors);
    setStatus(nextErrors.length ? "" : "入力内容を確認しました。このフォームは現在送信先未設定です。");
  }

  return (
    <form className="rounded-lg bg-[#242426] p-5 md:p-8" noValidate onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className={labelClass}>
          お名前
          <input
            className={fieldClass}
            onChange={(event) => updateField("name", event.target.value)}
            required
            type="text"
            value={form.name}
          />
        </label>
        <label className={labelClass}>
          会社名
          <input
            className={fieldClass}
            onChange={(event) => updateField("companyName", event.target.value)}
            type="text"
            value={form.companyName}
          />
        </label>
        <label className={labelClass}>
          メールアドレス
          <input
            className={fieldClass}
            onChange={(event) => updateField("email", event.target.value)}
            required
            type="email"
            value={form.email}
          />
        </label>
        <label className={labelClass}>
          電話番号
          <input
            className={fieldClass}
            inputMode="tel"
            onChange={(event) => updateField("phone", event.target.value)}
            type="tel"
            value={form.phone}
          />
        </label>
      </div>

      <label className={`${labelClass} mt-5`}>
        お問い合わせ種別
        <select
          className={fieldClass}
          onChange={(event) => updateField("category", event.target.value)}
          required
          value={form.category}
        >
          <option value="">選択してください</option>
          {contactCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <label className={`${labelClass} mt-5`}>
        お問い合わせ内容
        <textarea
          className={`${fieldClass} min-h-40 py-3 leading-7`}
          onChange={(event) => updateField("message", event.target.value)}
          required
          value={form.message}
        />
      </label>

      <label className="mt-5 flex items-start gap-3 text-sm font-semibold leading-7 text-zinc-300">
        <input
          checked={form.privacy}
          className="mt-1 size-5 border-zinc-500 accent-[#f97316]"
          onChange={(event) => updateField("privacy", event.target.checked)}
          required
          type="checkbox"
        />
        <span>個人情報の取り扱いに同意します。入力情報はお問い合わせ対応のために利用する想定です。</span>
      </label>

      {errors.length ? (
        <div aria-live="polite" className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold leading-7 text-red-700">
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      ) : null}

      {status ? (
        <p aria-live="polite" className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          {status}
        </p>
      ) : null}

      <button className="btn-primary mt-7 w-full sm:w-auto" type="submit">
        送信する
        <Send aria-hidden="true" className="size-4" />
      </button>
    </form>
  );
}
