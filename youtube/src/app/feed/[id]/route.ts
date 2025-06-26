// ✅ 올바른 API 라우트
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    
    return Response.json({
        id: id,                           // params의 id 반환
        email: "kcc002411@example.com"    // 원하는 이메일
    });
}